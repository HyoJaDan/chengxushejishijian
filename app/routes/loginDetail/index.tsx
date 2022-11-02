import { useState } from "react";
import { useRecoilState } from "recoil";
import { Datas } from "~/recoil/atoms";
import styled from "styled-components"
import { useForm } from "react-hook-form";

interface IUserData{
  userName: string;
  userPool: string;
  checkbox: [];
}

export default function Detail() {
  const [datas, setDatas] = useRecoilState(Datas);
  const [nowUserPool, setNowUserPool] = useState("Initial");
  const {
    register,
    handleSubmit,
    setValue,
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
      setValue("userName", "");
      setValue("checkbox", "");
      setNowUserPool("Initial");
    }
    else setNowUserPool("false");
  }
  const clickFunc = ( now:string )=>{
    setNowUserPool(now);
  }
  console.log("유저 데이터",datas);
  return (
    <Wrapper>
      <MainHeader>
        회원 정보
      </MainHeader>
      <HeaderText>입수 전 마지막 단계!</HeaderText>
      <Form onSubmit={handleSubmit(onValid)}>
        <Header>
          사용자 이름
        </Header>
        <InputText {...register("userName", {
          required: "이름을 적어주세요"
        })} placeholder="      사용자 이름을 입력해주세요." />
        <Errmessage>
          { errors?.userName?.message}
        </Errmessage>
        <Header>
          직업 분야
        </Header>
        <InputUsrPool>
          <PoolDev
            type="button"
            onClick={() => {
              clickFunc("dev");
              trigger();
            }}
          >
            개발
          </PoolDev>
          <PoolDesign
            type="button"
            onClick={() => {
              clickFunc("design");
              trigger();
            }}
          >
            디자인
          </PoolDesign>
        </InputUsrPool>
        {nowUserPool === "false" ? <Errmessage>
            직업 분야를 선택해 주세요.
        </Errmessage>
          :
          <Errmessage />
        }
        <Header>
          관심 분야
        </Header> 
        <GridCheckbox>
          <Gapcheckbox>
            <input {...register("checkbox")} type="checkbox"  id="1" className="cb1" value="백엔드개발" />
            <label htmlFor="1"><CheckboxSpan>백엔드개발</CheckboxSpan></label>
          </Gapcheckbox>
          <Gapcheckbox>
            <input {...register("checkbox")} type="checkbox" id="2" className="cb1" value="IOS" />
            <label htmlFor="2"><CheckboxSpan>IOS</CheckboxSpan></label>
          </Gapcheckbox>
          <Gapcheckbox>
            <input {...register("checkbox")} type="checkbox" id="3" className="cb1" value="Android" />
            <label htmlFor="3"><CheckboxSpan>Android</CheckboxSpan></label>
          </Gapcheckbox>
          <Gapcheckbox>
            <input {...register("checkbox")} type="checkbox" id="4" className="cb1" value="UX/UI" />
            <label htmlFor="4"><CheckboxSpan>UX/UI</CheckboxSpan></label>
          </Gapcheckbox>
          <Gapcheckbox>
            <input {...register("checkbox")} type="checkbox" id="5" className="cb1" value="BX" />
            <label htmlFor="5"><CheckboxSpan>BX</CheckboxSpan></label>
          </Gapcheckbox>
          <Gapcheckbox>
            <input {...register("checkbox")} type="checkbox" id="6" className="cb1" value="WEB개발" />
            <label htmlFor="6"><CheckboxSpan>WEB개발</CheckboxSpan></label>
          </Gapcheckbox>
          <Gapcheckbox>
            <input {...register("checkbox")} type="checkbox" id="7" className="cb1" value="기타디자인" />
            <label htmlFor="7"><CheckboxSpan>기타디자인</CheckboxSpan></label>
          </Gapcheckbox>
          <Gapcheckbox>
            <input {...register("checkbox")} type="checkbox" id="8" className="cb1" value="기타개발" />
            <label htmlFor="8"><CheckboxSpan>기타개발</CheckboxSpan></label>
          </Gapcheckbox>
        </GridCheckbox>
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
const Header = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`
const Form = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  gap:20px;
`;
const InputText = styled.input`
  box-sizing: border-box;
  height: 56px;
  width: 472px;
  font-size:17px;
  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  border-radius: 15px;
  &::placeholder{
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #D9D9D9;
  }
`;
const Errmessage = styled.span`
  color:red;
  height:18px;
`;
const InputUsrPool = styled.div`
  display:flex;
  gap:10px;
`;
const PoolDev = styled.button`
  width: 230px;
  height: 79px;

  background: #505050;
  border: 1px solid transparent;
  border-radius: 30px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #FFFFFF;
`;
const PoolDesign = styled(PoolDev)`
  background: #8EAEFF;
`;
const GridCheckbox = styled.div`
  display:grid;
  grid-template-rows:1fr 1fr 1fr;
  grid-template-columns:1fr 1fr 1fr;
  justify-items:start;
  width: -webkit-fill-available;
`;
const Gapcheckbox = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;
const CheckboxSpan = styled.span`
  padding:9px;
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
