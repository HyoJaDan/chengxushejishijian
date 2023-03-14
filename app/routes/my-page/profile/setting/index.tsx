import { useNavigate } from '@remix-run/react';
import axios from 'axios';
import { Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  userAccessToken,
  userId,
} from '~/recoils/user/common/login-information';
import { getUserData } from '~/recoils/user/user-data';

interface IData {
  userName: string;
  userJobPool: string;
  self_introduction: string;
}

function InputForm() {
  const navigate = useNavigate();
  const data = useRecoilValue(getUserData);
  const id = useRecoilValue(userId);
  const accessToken = useRecoilValue(userAccessToken);
  const { register, handleSubmit } = useForm<IData>({
    defaultValues: {
      userName: data.nickName,
      userJobPool: data.job,
      self_introduction: data.introduce,
    },
  });
  const onValid = (inputData: IData) => {
    axios.patch(
      `https://api.thepool.kr/api/members/${id}`,
      {
        nickname: inputData.userName,
        introduce: inputData.self_introduction,
        job: inputData.userJobPool,
        status: 1,
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
          <Title>
            <Body3BD className='body3_BD'>닉네임</Body3BD>
            <Body1RG>글자 제한 한글 8글자</Body1RG>
          </Title>
          <InputName
            className='body3_SB'
            {...register('userName')}
            placeholder={`${data.nickname}`}
          />
        </Content>
        <Content>
          <Title>
            <Body3BD className='body2_SB'>포지션</Body3BD>
            <Body1RG>글자 제한 한글 40글자</Body1RG>
          </Title>
          <Input
            className='body3_SB'
            {...register('userJobPool')}
            placeholder={`${data.jobPool}`}
          />
        </Content>
        <Content>
          <Body3BD>소개</Body3BD>
          <InputInproduction
            className='body3_MD'
            {...register('self_introduction')}
            placeholder={`${data.introduce}`}
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
        <Suspense>
          <InputForm />
        </Suspense>
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

const Input = styled.input`
  width: 856px;
  height: 40px;
  padding: 8px 12px;
  background: ${(prop) => prop.theme.color.grayScale.gray_100};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  border-radius: 8px;
  &:focus {
    outline: none;
    border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  }
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
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
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
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
const Body1RG = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: ${(prop) => prop.theme.color.grayScale.gray_700};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
