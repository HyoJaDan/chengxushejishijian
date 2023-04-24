import { useNavigate } from '@remix-run/react';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { Url } from '~/components/myPage/profile/setting/url';
import { memberDataAdress } from '~/data/constants/adress';
import {
  changedLocalValue,
  localStorageData,
  userAccessToken,
  userId,
} from '~/data/user/common/login-information';
import type { IURLImage } from '~/data/user/url-image';
import { getURLImage } from '~/data/user/url-image';
import { useManageUserInformation } from '~/hooks/manage-userinformation';
import SSRSafeSuspense from '~/hooks/ssr-safe-suspense';

export interface IData {
  userName: string;
  userJobPool: string;
  self_introduction: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  url: [];
  URL: {
    adress: string;
  }[];
}
export interface IURLs {
  nowURLImage: IURLImage;
  isTrue: boolean;
}
interface InputOnValidURL {
  type: number;
  url: string;
}
function InputForm() {
  /** 유저의 정보 */
  const navigate = useNavigate();
  const data = useManageUserInformation();
  const { memberSocialLinkMappings } = data;
  const id = useRecoilValue(userId);
  const accessToken = useRecoilValue(userAccessToken);
  const [localData, setLocalData] = useRecoilState(localStorageData);
  const setChangedLocalValue = useSetRecoilState(changedLocalValue);
  /** URL의 이미지 정보 */
  const URLImages = useRecoilValue(getURLImage);
  const initialURL: IURLs[] = [{ nowURLImage: URLImages[0], isTrue: true }];
  /** 유저의 정보와 URL 이미지 정보 가공 */
  const initialURLAdress: [{ adress: string }] = [{ adress: '' }];
  for (let i = 0; i < memberSocialLinkMappings.length; i += 1) {
    initialURL[i] = {
      nowURLImage:
        URLImages[memberSocialLinkMappings[i].memberSocialLinkId - 1],
      isTrue: true,
    };
    initialURLAdress[i] = { adress: memberSocialLinkMappings[i].url };
  }
  /** URL 이미지 초기화 */
  const [urls, setUrls] = useState<IURLs[]>(initialURL);

  /** react-hook-form 사용 */
  const { register, handleSubmit, watch, control } = useForm<IData>({
    defaultValues: {
      userName: data.nickname ? data.nickname : '',
      userJobPool: data.job ? data.job : '',
      self_introduction: data.introduce ? data.introduce : '',
      /** URL 주소 초기화 */
      URL: initialURLAdress,
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: 'URL',
    control,
  });

  /** 이미지 사용 */
  const ImgURL = useRef('');
  const [avatarPreview, setAvatarPreview] = useState('');
  const avatar = watch('image');
  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  }, [avatar]);

  /** 입력받았을떄 */
  const onValid = async (inputData: IData) => {
    if (inputData?.image[0]) {
      const formData = new FormData();
      formData.append('data', inputData?.image[0]);
      ImgURL.current = await axios({
        method: 'post',
        url: ' https://api.thepool.kr/uploads/post',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      }).then((res) => {
        return res.data.url;
      });
    } else if (data.thumbnail !== '') {
      ImgURL.current = data.thumbnail as string;
    }
    const URLs: InputOnValidURL[] = [];
    inputData.URL.forEach(({ adress }, idx) => {
      if (adress !== '') {
        URLs.push({
          type: urls[idx].nowURLImage.id,
          url: adress,
        });
      }
    });
    console.log(
      'Hello',
      localData.loginStatus,
      localData.accessToken,
      localData.id,
      inputData.userJobPool,
      ImgURL.current,
      inputData.userName
    );
    setLocalData({
      ...localData,
      job: inputData.userJobPool,
      img: ImgURL.current,
      name: inputData.userName,
    });
    setChangedLocalValue(true);
    console.log(localData);
    axios.patch(
      `${memberDataAdress}/${id}`,
      {
        nickname: inputData.userName,
        introduce: inputData.self_introduction,
        job: inputData.userJobPool,
        thumbnail: ImgURL.current,
        status: 1,
        memberSocialLinks: URLs,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    navigate('/my-page/profile');
  };
  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <Head>
        <Body1BD className='body1_BD'>프로필 수정</Body1BD>
        <Setting className='body3_BD'>
          <SettingImg src='/icons/my-page/setting.svg' alt='my-page' />
          <SettingFontBody3SB className='body3_SB'>수정하기</SettingFontBody3SB>
        </Setting>
      </Head>
      <Main>
        <Content>
          {avatarPreview ? (
            <LabelDisplayNone htmlFor='image'>
              <ImgThumbnailBackground src={avatarPreview} alt='img' />
              <InputDisplayNone {...register('image')} type='file' id='image' />
            </LabelDisplayNone>
          ) : (
            <ThumbnailBackground>
              <Label htmlFor='image'>
                {data.thumbnail === '' ? (
                  <img src='/icons/my-page/thumnail.svg' alt='' />
                ) : (
                  <ThumbnailBackgroundWrapper>
                    <ThumbnailWithoutImg src={data.thumbnail} alt='' />
                    <OnImg src='/icons/my-page/thumnail.svg' alt='' />
                  </ThumbnailBackgroundWrapper>
                )}
              </Label>
              <InputDisplayNone {...register('image')} type='file' id='image' />
            </ThumbnailBackground>
          )}
        </Content>
        <Content>
          <Title>
            <Body3BD className='body3_BD'>닉네임</Body3BD>
            <Body1RG overed={watch().userName.length > 8}>
              글자 제한 한글 8글자
            </Body1RG>
          </Title>
          <InputName
            className='body3_SB'
            {...register('userName', {
              required: '이름을 적어주세요',
              maxLength: 8,
            })}
            overed={watch().userName.length > 8}
            placeholder={data.nickname ? data.nickname : ''}
          />
        </Content>
        <Content>
          <Title>
            <Body3BD className='body3_SB'>포지션</Body3BD>
            <Body1RG overed={watch().userJobPool.length > 20}>
              글자 제한 한글 20글자
            </Body1RG>
          </Title>
          <Input
            className='body3_SB'
            {...register('userJobPool', {
              maxLength: 20,
            })}
            overed={watch().userJobPool.length > 20}
            placeholder={data.job ? data.job : ''}
          />
        </Content>
        <Content>
          <Body3BD className='body3_BD'>소개</Body3BD>
          <InputInproduction
            className='body3_MD'
            {...register('self_introduction')}
            placeholder={data.introduce ? data.introduce : ''}
          />
        </Content>
        <Content>
          <Body3BD className='body3_BD'>URL</Body3BD>
          <Url
            register={register}
            fields={fields}
            append={append}
            remove={remove}
            urls={urls}
            setUrls={setUrls}
            URLImages={URLImages}
          />
        </Content>
      </Main>
    </Form>
  );
}
export default function ProfileSetting() {
  return (
    <Background>
      <Wrapper>
        <SSRSafeSuspense>
          <InputForm />
        </SSRSafeSuspense>
      </Wrapper>
    </Background>
  );
}
const Background = styled.div`
  min-height: 100vh;
  margin-top: -134px;
  padding: 244px 0 88px 0;
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
`;
const Wrapper = styled.div`
  width: 920px;
  min-height: 855px;
  margin: 0 auto;
  background: ${(prop) => prop.theme.color.basic.white};
  border-radius: 8px;
`;
const Form = styled.form`
  padding: 32px;
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Body1BD = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;
const Title = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Input = styled.input<{ overed: boolean }>`
  width: 856px;
  height: 40px;
  padding: 8px 12px;
  background: ${(prop) => prop.theme.color.grayScale.gray_100};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  border-radius: 8px;
  &:focus {
    outline: none;
    border: 1px solid ${(prop) => prop.theme.color.primary.blue.blue_500};
    ${({ overed }) => overed && `border: 1px solid #eb2317;`}
  }
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
  ${({ overed }) => overed && `border: 1px solid #eb2317;`}
`;
const InputName = styled(Input)`
  width: 225px;
`;
const InputInproduction = styled.textarea`
  width: 856px;
  padding: 8px 12px;
  background: ${(prop) => prop.theme.color.grayScale.gray_100};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  border-radius: 8px;
  min-height: 229px;
  outline: none;
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
  resize: none;
  &:focus {
    border: 1px solid ${(prop) => prop.theme.color.primary.blue.blue_500};
  }
`;
const SettingFontBody3SB = styled.div`
  color: ${(prop) => prop.theme.color.basic.black};
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Setting = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 6.5px;
  border: 1px solid transparent;
  width: 107px;
  height: 46px;
  background: #efedea;
  border-radius: 100px;
  cursor: pointer;

  &:hover {
    color: #2478f6;
  }
`;
const SettingImg = styled.img``;
const Body3BD = styled.div`
  ${(prop) => prop.theme.color.grayScale.gray_800};
`;
const Body1RG = styled.div<{ overed: boolean }>`
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: ${(prop) => prop.theme.color.grayScale.gray_700};
  ${({ overed }) => overed && `color: #eb2317;`}
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
`;
const ThumbnailBackground = styled.div`
  width: 96px;
  height: 96px;
  background: #d9d9d9;
  border-radius: 48px;
  display: flex;
  justify-content: center;
`;
const ImgThumbnailBackground = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 48px;
  cursor: pointer;
`;
const InputDisplayNone = styled.input`
  display: none;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: -webkit-fill-available;
  cursor: pointer;
`;
const LabelDisplayNone = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;
const ThumbnailBackgroundWrapper = styled.div`
  position: relative;
`;

const OnImg = styled.img`
  position: absolute;
  top: 40px;
  left: 40px;
`;
const ThumbnailWithoutImg = styled.img`
  width: 96px;
  height: 96px;
  background: #d9d9d9;
  border-radius: 48px;
  display: flex;
  justify-content: center;
  filter: brightness(0.5);
`;
