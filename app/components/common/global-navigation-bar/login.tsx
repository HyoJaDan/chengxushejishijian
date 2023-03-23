import { Link } from '@remix-run/react';
import styled from 'styled-components';
import type { ILoginInfo, loginType } from '~/models/user';

type IType = {
  loginInformation: ILoginInfo<loginType>;
  setLogin: Function;
};

export const Login = ({ loginInformation, setLogin }: IType) => {
  if (loginInformation.loginStatus) {
    if (loginInformation.img === null)
      return <CircleLink className='body3_BD' to='/my-page/profile' />;
    return (
      <CircleLink to='/my-page/profile'>
        <Img src={loginInformation.img} alt='img' />
      </CircleLink>
    );
  }
  return (
    <TextLink className='body2_SB' onClick={() => setLogin(false)}>
      시작하기
    </TextLink>
  );
};
const TextLink = styled.div`
  cursor: pointer;
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
`;
const CircleLink = styled(Link)`
  display: grid;
  place-content: center;
  width: 32px;
  height: 32px;
  background-color: #c2c0bd;
  clip-path: circle(50%);
  color: ${(prop) => prop.theme.color.basic.black};
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
`;
