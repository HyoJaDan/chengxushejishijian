/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

interface IInputUserName {
  register: Function;
  errors: any;
}

export default function InputUserName({ register, errors }: IInputUserName) {
  return (
    <InputName>
      <Header>사용자 이름</Header>
      <InputText
        {...register('userName', {
          required: '이름을 적어주세요',
        })}
        placeholder='    사용자 이름을 입력해주세요.'
      />
      <Errmessage>{errors.userName?.message}</Errmessage>
    </InputName>
  );
}
const InputName = styled.div`
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
const InputText = styled.input`
  box-sizing: border-box;
  height: 56px;
  width: 472px;
  font-size: 17px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 15px;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #d9d9d9;
  }
`;
const Errmessage = styled.span`
  color: red;
  height: 18px;
`;
