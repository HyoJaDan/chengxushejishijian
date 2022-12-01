import { useRecoilValue, useRecoilState } from 'recoil';
import { userData, loginInformation } from '~/recoils/user-info/atoms';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
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
  const nowUserPool = useRef('Initial');
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
    let nextInterestData = userDatas.userInterest;
    for (let i = 0; i < data.userInterest.length; i += 1) {
      const Idx = userDatas.userInterest.findIndex(
        (v) => v.value === data.userInterest[i]
      );
      nextInterestData = [
        ...nextInterestData.slice(0, Idx),
        {
          value: nextInterestData[Idx].value,
          isTrue: true,
        },
        ...nextInterestData.slice(Idx + 1),
      ];
    }
    if (nowUserPool.current !== 'Initial' && nowUserPool.current !== 'false') {
      setUserDatas({
        ...userDatas,
        userNickName: data.userNickName,
        userJobPool: nowUserPool.current,
        userInterest: nextInterestData,
      });
      navigate('/');
    } else nowUserPool.current = 'false';
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
          <InputUserArea userPool={nowUserPool} />
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
  height: 1080px;
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
