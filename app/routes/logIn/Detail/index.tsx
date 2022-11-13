import { useSetRecoilState,useRecoilState } from "recoil";
import { Datas ,UserPool } from "~/recoils/user-info/atoms";
import { useForm } from "react-hook-form";
import { useNavigate } from '@remix-run/react';
import styled from "styled-components"
import InputUserArea from "~/components/input-user-info/input-area";
import InputUserInterests from "~/components/input-user-info/input-interest";
import InputUserName from '../../../components/input-user-info/input-name';

export interface IUserData{
  userName: string;
  userPool: string;
  checkbox: [];
}
export default function Detail() {
  const navigate = useNavigate();
  const setDatas = useSetRecoilState(Datas);
  const [nowUserPool, setNowUserPool] = useRecoilState(UserPool);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<IUserData>();
  
  const onValid = (data: IUserData) => {
    if (nowUserPool !== "Initial" && nowUserPool !== "false")
    {
      setDatas(oldDatas => [{
        userName : data.userName,
        userPool: nowUserPool,
        checkbox : data.checkbox,
      }, ... oldDatas])
      setNowUserPool("Initial");
      navigate("/");
    }
    else setNowUserPool("false");
  }
  return (
    <Wrapper>
      <MainHeader>회원 정보</MainHeader>
      <HeaderText>입수 전 마지막 단계!</HeaderText>
      <Form onSubmit={handleSubmit(onValid)}>
        <InputUserName register={register} errors={errors} />
        <InputUserArea triggerValidation={trigger} />
        <InputUserInterests register={register} />
        <ButtonDiv>
          <Btn>완료</Btn>
        </ButtonDiv>
      </Form>
    </Wrapper>
  )
}
const Wrapper=styled.div`
  position: absolute;
  width: 640px;
  height: 750px;
  background: #FFFFFF;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  font-family: 'Pretendard';
  font-style: normal;
  color: #000000;
  text-align: center;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:space-evenly;
  padding : 43px 0px 20px 59px;
`;
const MainHeader = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  height:45px;
`;
const HeaderText = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  height:45px;
  margin-bottom:19px;
`;

const Form = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  gap:20px;
`;

const ButtonDiv = styled.div`
  width: -webkit-fill-available;
`;
const Btn = styled.button`
  background: #8EAEFF;
  border: 1px solid transparent;
  border-radius: 30px;
  width: 232px;
  height: 65px;

  font-family: 'Alata';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  text-align: center;

  color: rgba(255, 255, 255, 0.85);

  &:focus{
    outline: 10px;
  }
`;
