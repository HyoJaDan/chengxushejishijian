import { useNavigate } from '@remix-run/react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import InputUserArea from '~/components/input-user-info/input-area-button';
import InputUserInterests from '~/components/input-user-info/input-interest';
import { loginInformation } from '~/recoils/user/login-information';
import { userData, userJobPoolSelector } from '~/recoils/user/user-data';
import InputUserName from '../../components/input-user-info/input-name';

export interface IUserData {
  userNickName: string;
  userJobPool: string;
  userInterest: [];
}
export default function Detail() {
  const navigate = useNavigate();
  const [userDatas, setUserDatas] = useRecoilState(userData);
  const loginInfo = useRecoilValue(loginInformation);
  const [useUserJobPool, setUserJobPool] = useRecoilState(userJobPoolSelector);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserData>({
    defaultValues: {
      userNickName: loginInfo.name,
    },
  });
  const onValid = (data: IUserData) => {
    if (useUserJobPool !== 'false' && useUserJobPool !== '프로덕트 디자이너') {
      const nextInterestData = JSON.parse(JSON.stringify(userDatas.interest));
      if (data.userInterest.length > 0)
        data.userInterest.forEach((index) => {
          const Idx = userDatas.interest.findIndex((v) => v.value === index);
          nextInterestData[Idx].isTrue = true;
        });
      setUserDatas({
        ...userDatas,
        nickName: data.userNickName,
        jobPool: useUserJobPool,
        interest: nextInterestData,
      });

      axios.patch(
        'https://api.thepool.kr/api/members/1',
        {
          nickname: data.userNickName,
          job: useUserJobPool,
          status: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              'thePoolAccessToken'
            )}`,
          },
        }
      );
      navigate('/');
    } else setUserJobPool('false');
  };
  return (
    <Background>
      <Wrapper>
        <Head>
          <HeadInfo>🤿 회원 정보 입력</HeadInfo>
          <HeadBefore>입수 전 마지막 단계!</HeadBefore>
        </Head>
        <Form onSubmit={handleSubmit(onValid)}>
          <InputUserName register={register} errors={errors} watch={watch} />
          <InputUserArea />
          <InputUserInterests register={register} />
          <ButtonDiv>
            <Btn>완료</Btn>
          </ButtonDiv>
        </Form>
      </Wrapper>
    </Background>
  );
}
const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #e5e5e5;
  margin: -56px 0 0 0;
  padding: 56px 0 0 0;
  width: -webkit-fill-available;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 74px 0;
  width: 640px;
  gap: 40px;
  background: #ffffff;
  box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  font-style: normal;
  color: #000000;
  text-align: center;
`;
const Head = styled.div`
  display: flex;
  align-items: baseline;
  width: -webkit-fill-available;
  margin: 40px 0 0 80px;
  gap: 20px;
`;
const HeadInfo = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 132%;
  color: #31302f;
`;
const HeadBefore = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: #787573;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 40px;
`;

const ButtonDiv = styled.div`
  width: -webkit-fill-available;
  margin-top: 55px;
`;
const Btn = styled.button`
  border: 1px solid transparent;
  width: 131px;
  height: 60px;
  background: linear-gradient(
      0deg,
      rgba(45, 184, 243, 0.36),
      rgba(45, 184, 243, 0.36)
    ),
    #ffffff;
  border-radius: 100px;
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    outline: 10px;
    background: #2db8f3;
  }
`;
