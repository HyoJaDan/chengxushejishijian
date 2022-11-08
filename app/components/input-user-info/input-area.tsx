import styled from "styled-components";
import { useRecoilState } from 'recoil';
import { UserPool } from "~/recoils/user-info/atoms";

export default function InputUserArea({ trigger }: any) {
  const [nowUserPool, setNowUserPool] = useRecoilState(UserPool);
  
  const clickFunc = ( now : string )=>{
    setNowUserPool(now);
  }
  return (
    <InputArea>
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
    </InputArea>
  );
}
const InputArea = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  grid-gap:19px;
`;
const Header = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
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
const Errmessage = styled.span`
  color:red;
  height:18px;
`;
