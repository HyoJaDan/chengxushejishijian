/* eslint-disable no-param-reassign */
import styled from 'styled-components';
import { useState } from 'react';
import { Header } from './input-name';

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
            if (activeDev) {
              setActiveDev(false);
              UserPool.current = 'false';
            } else {
              UserPool.current = '개발';
              setActiveDev(true);
              setActiveDesign(false);
            }
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
            if (activeDesign) {
              setActiveDesign(false);
              UserPool.current = 'false';
            } else {
              setActiveDev(false);
              setActiveDesign(true);
              UserPool.current = '디자인';
            }
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
const InputUsrPool = styled.div`
  display: flex;
  gap: 10px;
`;
const DevPool = styled.button`
  width: 230px;
  height: 79px;

  border: 1px solid transparent;
  border-radius: 24px;
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
  width: -webkit-fit-content;
`;
