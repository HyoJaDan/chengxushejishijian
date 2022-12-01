import styled from 'styled-components';
import { Link, useNavigate } from '@remix-run/react';
import { userData, clickSetting } from '~/recoils/user-info/atoms';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import OutputTags from '../../../../components/myPage/profile/outputTags';

interface IData {
  userName: string;
  userJobPool: string;
  self_introduction: string;
}
const defaultData = {
  skill: false,
  interest: false,
  tag: false,
};
export default function ProfileSetting() {
  const setClicked = useSetRecoilState(clickSetting);
  const onClickSetting = (data: string) => {
    const newData = {
      ...defaultData,
      [data]: true,
    };
    setClicked(newData);
  };

  const navigate = useNavigate();
  const [data, setData] = useRecoilState(userData);
  const { register, handleSubmit } = useForm<IData>({
    defaultValues: {
      userName: data.userNickName,
      userJobPool: data.userJobPool,
      self_introduction: data.introduce,
    },
  });
  const onValid = (inputData: IData) => {
    setData({
      ...data,
      userNickName: inputData.userName,
      userJobPool: inputData.userJobPool,
      introduce: inputData.self_introduction,
    });
    navigate(`/${data.userNickName}/profile`);
  };

  return (
    <Background>
      <Wrapper>
        <Form onSubmit={handleSubmit(onValid)}>
          <Title>사용자 이름</Title>
          <Input
            {...register('userName')}
            placeholder={`${data.userNickName}`}
          />
          <Title>직무/분야</Title>
          <Input
            {...register('userJobPool')}
            placeholder={`${data.userJobPool}`}
          />
          <Title>자기소개</Title>
          <InputInproduction
            {...register('self_introduction')}
            placeholder={`${data.introduce}`}
          />
          <Title>스킬</Title>
          <Div>
            <OutputTags tag='skills' />
            <SettingBtn
              layoutId='setting'
              onClick={() => onClickSetting('skill')}
            >
              스킬 설정
            </SettingBtn>
          </Div>
          <Title>관심분야</Title>
          <Div>
            <OutputTags tag='interests' />
            <SettingBtn
              layoutId='interest'
              onClick={() => onClickSetting('interest')}
            >
              관심분야 설정
            </SettingBtn>
          </Div>
          <Title>추천 태그</Title>
          <Div>
            <OutputTags tag='tags' />
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
      </Wrapper>
      <Button>
        <Back to={`/${data.userNickName}/profile`}>프로필로 돌아가기</Back>
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
  /* identical to box height, or 12px */
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
