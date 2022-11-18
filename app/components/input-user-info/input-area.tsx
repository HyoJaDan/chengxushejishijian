/* eslint-disable no-param-reassign */
import styled from 'styled-components';
import { useState } from 'react';

interface IUserPool {
  userPool: React.MutableRefObject<string>;
}

export default function InputUserArea({ userPool }: IUserPool) {
  const [activeDev, setActiveDev] = useState(false);
  const [activeDesign, setActiveDesign] = useState(false);
  const UserPool = userPool;

  return (
    <InputArea>
      <Header>직업 분야</Header>
      <InputUsrPool>
        <DevPool
          type='button'
          className={
            activeDev ? 'chooseAreaButtonActive' : 'chooseAreaButtonNotActive'
          }
          onClick={() => {
            UserPool.current = '개발';
            setActiveDev(true);
            setActiveDesign(false);
          }}
        >
          개발
        </DevPool>
        <DesignPool
          type='button'
          className={
            activeDesign
              ? 'chooseAreaButtonActive'
              : 'chooseAreaButtonNotActive'
          }
          onClick={() => {
            UserPool.current = '디자인';
            setActiveDev(false);
            setActiveDesign(true);
          }}
        >
          디자인
        </DesignPool>
      </InputUsrPool>
      {UserPool.current === 'false' ? (
        <Errmessage>직업 분야를 선택해 주세요.</Errmessage>
      ) : (
        <Errmessage />
      )}
    </InputArea>
  );
}
const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 19px;
`;
const Header = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;
const InputUsrPool = styled.div`
  display: flex;
  gap: 10px;
`;
const DevPool = styled.button`
  width: 230px;
  height: 79px;

  border: 1px solid transparent;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;
const DesignPool = styled(DevPool)``;
const Errmessage = styled.span`
  color: red;
  height: 18px;
`;
