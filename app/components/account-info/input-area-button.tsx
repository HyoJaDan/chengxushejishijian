/* eslint-disable no-param-reassign */
import styled from 'styled-components';

interface IButton {
  name: string;
}
interface IData {
  userJobPool: '개발' | '디자인' | 'false' | 'initialData';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUserJobPool: any;
}
export default function InputUserArea({ userJobPool, setUserJobPool }: IData) {
  const buttons: IButton[] = [{ name: '개발' }, { name: '디자인' }];
  const button = buttons.map(({ name }, index) => {
    const id = `button_${index}`;
    return (
      <Pool
        key={id}
        type='button'
        className={
          userJobPool === name
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
  console.log(userJobPool);
  return (
    <InputArea>
      <div className='body1_BD'>직업 분야</div>
      <InputUsrPool>{button}</InputUsrPool>
      {userJobPool === 'false' ? (
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
