import { useNavigate } from '@remix-run/react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import type { IClickSetting } from '~/recoils/user/user-data';
import { clickSetting, userData } from '~/recoils/user/user-data';

interface IData {
  userName: string;
  userJobPool: string;
  self_introduction: string;
}

function InputForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [clicked, setClicked] = useRecoilState(clickSetting);
  const onClickSetting = (data: Exclude<IClickSetting, undefined>) => {
    setClicked(data);
  };
  const navigate = useNavigate();
  const [data, setData] = useRecoilState(userData);

  const { register, handleSubmit } = useForm<IData>({
    defaultValues: {
      userName: data.nickName,
      userJobPool: data.jobPool,
      self_introduction: data.introduce,
    },
  });
  const onValid = (inputData: IData) => {
    setData({
      ...data,
      nickName: inputData.userName,
      jobPool: inputData.userJobPool,
      introduce: inputData.self_introduction,
    });
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
            placeholder={`${data.nickName}`}
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
        <InputForm />
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
