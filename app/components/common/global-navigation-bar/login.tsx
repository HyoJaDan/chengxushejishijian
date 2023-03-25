import { Link } from '@remix-run/react';
import { useState } from 'react';
import styled from 'styled-components';
import type { ILoginInfo, loginType } from '~/models/user';

type IType = {
  localStorageData: ILoginInfo<loginType>;
  setLogin: Function;
};

export const Login = ({ localStorageData, setLogin }: IType) => {
  const [isTrue, setIsTrue] = useState<boolean>(true);
  const clickFunction = () => {
    setIsTrue(!isTrue);
  };
  if (localStorageData.loginStatus === 'login') {
    if (localStorageData.img === '')
      return <CircleLink className='body3_BD' to='/my-page/profile' />;
    return (
      <div>
        <CircleLink to='/my-page/profile' onClick={clickFunction}>
          <Img src={localStorageData.img} alt='' />
        </CircleLink>
        <Page isTrue={isTrue ? 1 : 0} />
      </div>
    );
  }
  return (
    <TextLink className='body2_SB' onClick={() => setLogin('unLogin')}>
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
const Page = styled.div<{ isTrue: boolean }>`
  position: absolute;
  width: 256px;
  height: 283px;
  right: 135px;
  top: 9.04px;

  background: #d9d9d9;
  border-radius: 8px;
  z-index: 5;
  ${({ isTrue }) => isTrue && `display:none;`}
`;
