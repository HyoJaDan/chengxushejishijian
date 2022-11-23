/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import type { UseFormRegister } from 'react-hook-form';
import type { IUserData } from '~/routes/login/account-info';

interface IInputUserName {
  register: UseFormRegister<IUserData>;
  errors: any;
}

export default function InputUserName({ register, errors }: IInputUserName) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register('userNickName', {
    required: '이름을 적어주세요',
  });
  useEffect(() => {
    inputRef.current?.focus();
  });
  return (
    <InputName>
      <Header>사용자 이름</Header>
      <InputText
        {...rest}
        name='userNickName'
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
        placeholder='    사용자 이름을 입력해주세요.'
      />
      <Errmessage>{errors.userNickName?.message}</Errmessage>
    </InputName>
  );
}
const InputName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 19px;
`;
export const Header = styled.div`
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
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: -o-fit-content;
  width: -ms-fit-content;
`;
