import { Link, useNavigate } from '@remix-run/react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import type { IClickSetting } from '~/recoils/user-info/atoms';
import { clickSetting, userData } from '~/recoils/user-info/atoms';
import OutputTags from '../../../../components/myPage/profile/outputTags';

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
      <Title>사용자 이름</Title>
      <Input {...register('userName')} placeholder={`${data.nickName}`} />
      <Title>직무/분야</Title>
      <Input {...register('userJobPool')} placeholder={`${data.jobPool}`} />
      <Title>자기소개</Title>
      <InputInproduction
        {...register('self_introduction')}
        placeholder={`${data.introduce}`}
      />
      <Title>스킬</Title>
      <Div>
        <OutputTags tag='skill' />
        <SettingBtn layoutId='skill' onClick={() => onClickSetting('skill')}>
          스킬 설정
        </SettingBtn>
      </Div>
      <Title>관심분야</Title>
      <Div>
        <OutputTags tag='interest' />
        <SettingBtn
          layoutId='interest'
          onClick={() => onClickSetting('interest')}
        >
          관심분야 설정
        </SettingBtn>
      </Div>
      <Title>추천 태그</Title>
      <Div>
        <OutputTags tag='tag' />
        <SettingBtn layoutId='tag' onClick={() => onClickSetting('tag')}>
          추천태그 설정
        </SettingBtn>
      </Div>
      <div />
      <Div>
        <div />
        <SubmitBtn>저장하기</SubmitBtn>
      </Div>
    </Form>
  );
}
export default function ProfileSetting() {
  return (
    <Background>
      <Wrapper>
        <InputForm />
      </Wrapper>
      <Button>
        <Back to='/my-page/profile'>프로필로 돌아가기</Back>
      </Button>
    </Background>
  );
}
const Background = styled.div`
  height: 100vh;
  flex-grow: 2.2;
`;
const Wrapper = styled.div`
  width: 936px;
  height: 860px;

  background: #ffffff;
  border-radius: 8px;
  display: flex;
  padding: 200px 0 20px 0;
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  align-content: space-between;
  padding: 0 34px 0 37px;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #1f1f1f;
`;

const Input = styled.input`
  width: 298px;
  height: 49px;

  border: 1px solid #d9d9d9;
  border-radius: 8px;
`;
const InputInproduction = styled.input`
  width: 700px;
  height: 110px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SettingBtn = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  gap: 8px;
  background: #2478f6;
  border-radius: 14px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;

  cursor: pointer;
  color: #ffffff;
  &:hover {
    color: black;
  }
`;
const Button = styled.div`
  width: 936px;
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
`;
const Back = styled(Link)`
  width: 220px;
  height: 54px;

  background: #ffffff;
  border-radius: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  text-align: center;

  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #515151;
    color: white;
  }
`;
const SubmitBtn = styled.button`
  width: 220px;
  height: 54px;
  border-radius: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  text-align: center;

  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #515151;
  color: white;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    color: black;
  }
  &:active {
    color: black;
  }
`;
