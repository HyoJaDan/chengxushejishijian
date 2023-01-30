/* eslint-disable no-param-reassign */
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { userJobPoolSelector } from '~/recoils/user-info/atoms';
import { Header } from './input-name';

interface IButton {
  name: string;
}

export default function InputUserArea() {
  const [userJobpool, setUserJobPool] = useRecoilState(userJobPoolSelector);
  const buttons: IButton[] = [{ name: '개발' }, { name: '디자인' }];
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
  grid-gap: 24px;
`;
const InputUsrPool = styled.div`
  display: flex;
  gap: 8px;
`;
const Pool = styled.button`
  /* button */
  width: 224px;
  height: 80px;
  border-radius: 16px;
  border: 1px solid transparent;

  /* font */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  cursor: pointer;
`;
const Errmessage = styled.span`
  color: red;
  height: 18px;
  width: -webkit-fit-content;
`;
