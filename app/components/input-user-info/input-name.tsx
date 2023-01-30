/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import type { UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import type { IUserData } from '~/routes/login/account-info';

interface inputUserNameProps {
  register: UseFormRegister<IUserData>;
  errors: any;
  watch: any;
}

export default function InputUserName({
  register,
  errors,
  watch,
}: inputUserNameProps) {
  const [isValid, setIsValid] = useState(false);
  const onblur = () => {
    if (watch().userNickName.length < 20 && watch().userNickName.length !== 0) {
      setIsValid(true);
    } else setIsValid(false);
  };
  const onfocus = () => {
    setIsValid(false);
  };
  return (
    <InputName>
      <Content>
        <Header>닉네임</Header>
        <CharacterRestriction>
          <InputText
            {...register('userNickName', {
              required: '이름을 적어주세요',
              maxLength: 19,
            })}
            onBlur={onblur}
            onFocus={onfocus}
            autoFocus
            overed={watch().userNickName.length >= 20}
            isValid={isValid}
            autoComplete='off'
            placeholder='사용자 이름을 입력해주세요.'
          />
          <Errors>
            <NumOfLetters
              overed={watch().userNickName.length >= 20}
              check={isValid}
            >
              {watch().userNickName.length}/20
            </NumOfLetters>
            <ImgWarn
              src='/icons/warning.svg'
              overed={watch().userNickName.length >= 20}
              alt='warning'
            />
            <ImgCheck src='/icons/check.svg' check={isValid} alt='check' />
          </Errors>
        </CharacterRestriction>
      </Content>
      <Massage overed={watch().userNickName.length >= 20} check={isValid}>
        한글 10자, 영문 20자 이내로 입력해주세요.
      </Massage>
      <Errmessage>{errors.userNickName?.message}</Errmessage>
    </InputName>
  );
}
const InputName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
export const Header = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
`;
const InputText = styled.input<{ overed: boolean; isValid: boolean }>`
  box-sizing: border-box;
  height: 56px;
  width: 472px;
  font-size: 17px;
  background: #ffffff;
  border: 1px solid #dddad7;
  border-radius: 8px;
  padding: 0.8em 6.5em 0.8em 1em;
  font-weight: 500;
  line-height: 140%;
  font-size: 16px;
  color: #484746;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #d9d9d9;
    margin-left: 20px;
  }
  &:focus {
    outline: none;
    border: 1px solid #2db8f3;
    ${({ overed }) => overed && `border: 1px solid #D30D00;`}
    ${({ isValid }) => isValid && `setIsValid(false)`}
  }
  ${({ isValid }) => isValid && `border: 1px solid #1BC20C;`}
  ${({ overed }) => overed && `border: 1px solid #D30D00;`}
`;
const Massage = styled.div<{ overed: boolean; check: boolean }>`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  width: 472px;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #484746;
  padding-right: 20px;
  height: 18px;
  ${({ overed }) => overed && `color: #D30D00;`}
  ${({ check }) => check && `visibility: hidden`}
`;

const Errmessage = styled.span`
  color: #d30d00;
  height: 18px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: -o-fit-content;
  width: -ms-fit-content;
`;
const CharacterRestriction = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const Errors = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  gap: 8px;
`;
const NumOfLetters = styled.div<{ overed: boolean; check: boolean }>`
  color: #a4a2a0;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  ${({ overed }) => overed && `color: #D30D00;`}
  ${({ check }) => check && `display:none`}
`;
const ImgWarn = styled.img<{ overed: boolean }>`
  display: none;
  ${({ overed }) => overed && `display:block`}
`;
const ImgCheck = styled.img<{ check: boolean }>`
  display: none;
  ${({ check }) => check && `display:block`}
`;
