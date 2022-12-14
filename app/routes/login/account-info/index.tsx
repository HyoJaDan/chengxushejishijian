import { useRecoilValue, useRecoilState } from 'recoil';
import {
  userData,
  loginInformation,
  userJobPoolSelector,
} from '~/recoils/user-info/atoms';
import { useForm } from 'react-hook-form';
import { useNavigate } from '@remix-run/react';
import styled from 'styled-components';
import InputUserArea from '~/components/input-user-info/input-area';
import InputUserInterests from '~/components/input-user-info/input-interest';
import InputUserName from '../../../components/input-user-info/input-name';

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
    formState: { errors },
  } = useForm<IUserData>({
    defaultValues: {
      userNickName: loginInfo.name,
    },
  });
  const onValid = (data: IUserData) => {
    const nextInterestData = JSON.parse(JSON.stringify(userDatas.interest));
    data.userInterest.forEach((index) => {
      const Idx = userDatas.interest.findIndex((v) => v.value === index);
      nextInterestData[Idx].isTrue = true;
    });
    if (useUserJobPool !== 'false' && useUserJobPool !== '프로덕트 디자이너') {
      setUserDatas({
        ...userDatas,
        nickName: data.userNickName,
        jobPool: useUserJobPool,
        interest: nextInterestData,
      });
      navigate('/');
    } else setUserJobPool('false');
  };
  return (
    <Wrap>
      <Wrapper>
        <Head>
          <HeadInfo>회원 정보</HeadInfo>
          <HeadBefore>입수 전 마지막 단계!</HeadBefore>
        </Head>
        <Form onSubmit={handleSubmit(onValid)}>
          <InputUserName register={register} errors={errors} />
          <InputUserArea />
          <InputUserInterests register={register} />
          <ButtonDiv>
            <Btn>완료</Btn>
          </ButtonDiv>
        </Form>
      </Wrapper>
    </Wrap>
  );
}
const Wrap = styled.div`
  position: absolute;
  height: 130vh;
  width: -webkit-fill-available;
  background-color: #e9eaec;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  position: absolute;
  width: 640px;
  background: #ffffff;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  font-family: 'Pretendard';
  font-style: normal;
  color: #000000;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 54px;
  top: 74px;
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 340px;
`;
const HeadInfo = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  height: 45px;
  margin-top: 69px;
`;
const HeadBefore = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 48px;
`;

const ButtonDiv = styled.div`
  width: -webkit-fill-available;
  margin-top: 55px;
`;
const Btn = styled.button`
  border: 1px solid transparent;
  width: 240px;
  height: 72px;
  background: rgba(36, 120, 246, 0.4);
  border-radius: 16px;

  font-family: 'Alata';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  text-align: center;

  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  &:focus {
    outline: 10px;
    background: #2478f6;
  }
`;
