import { useNavigate } from '@remix-run/react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import InputUserArea from '~/components/account-info/input-area-button';
import InputUserInterests from '~/components/account-info/input-interest';
import { localStorageData, userId } from '~/data/user/common/login-information';
import type { IUserDataAccountInfo } from '~/models/user';

import { memberDataAdress } from '~/data/constants/adress';
import { userJobPoolSelector } from '~/data/user/user-data';
import InputUserName from '../components/account-info/input-name';

export default function Detail() {
  const navigate = useNavigate();

  const localData = useRecoilValue(localStorageData);
  const [useUserJobPool, setUserJobPool] = useRecoilState(userJobPoolSelector);
  const id = useRecoilValue(userId);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserDataAccountInfo>({
    defaultValues: {
      userNickName: localData.name ? localData.name : '',
    },
  });
  const onValid = (data: IUserDataAccountInfo) => {
    if (useUserJobPool !== 'false' && useUserJobPool !== '프로덕트 디자이너') {
      axios.patch(
        `${memberDataAdress}/${id}`,
        {
          nickname: data.userNickName,
          job: useUserJobPool,
          status: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${localData.accessToken}`,
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
          <HeadInfo className='title4_BD'>🤿 회원 정보 입력</HeadInfo>
          <HeadBefore className='body2_SB'>입수 전 마지막 단계!</HeadBefore>
        </Head>
        <Form onSubmit={handleSubmit(onValid)}>
          <InputUserName register={register} errors={errors} watch={watch} />
          <InputUserArea />
          <InputUserInterests register={register} />
          <ButtonDiv>
            <Btn className='body1_BD'>완료</Btn>
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
  margin: -72px 0 0 0;
  padding: 72px 0 0 0;
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
  background: ${(prop) => prop.theme.color.basic.white};
  box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  color: ${(prop) => prop.theme.color.basic.black};
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
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;
const HeadBefore = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_700};
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
    ${(prop) => prop.theme.color.basic.white};
  border-radius: 100px;
  text-align: center;
  color: ${(prop) => prop.theme.color.basic.white};
  cursor: pointer;
  &:hover {
    outline: 10px;
    background: #2db8f3;
  }
`;
