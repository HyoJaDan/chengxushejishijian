/* eslint-disable no-param-reassign */
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userJobPoolSelector } from '~/recoils/user-info/atoms';
import { Header } from './input-name';

interface temp {
  name: string;
}

export default function InputUserArea() {
  const [userJobpool, setUserJobPool] = useRecoilState(userJobPoolSelector);
  const buttons: temp[] = [{ name: '개발자' }, { name: '디자인' }];
  const button = buttons.map(({ name }, index) => {
    const id = `button_${index}`;
    return (
      <Pool
        key={id}
        type='button'
        className={
          userJobpool === name
            ? 'chooseAreaButtonActive'
            : 'chooseAreaButtonNotActive'
        }
        onClick={() => {
          setUserJobPool(name);
        }}
      >
        {name}
      </Pool>
    );
  });
  return (
    <InputArea>
      <Header>직업 분야</Header>
      <InputUsrPool>{button}</InputUsrPool>
      {userJobpool === 'false' ? (
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
const Pool = styled.button`
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
const Errmessage = styled.span`
  color: red;
  height: 18px;
  width: -webkit-fit-content;
`;
