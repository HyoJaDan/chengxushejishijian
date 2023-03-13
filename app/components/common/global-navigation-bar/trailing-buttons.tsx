import { Link } from '@remix-run/react';
import type { FC } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  loginInformation,
  loginStatus,
} from '~/recoils/user/common/login-information';

type IType = {
  isloggedin: boolean | undefined | 'shutDown';
  setlogin: Function;
  name: string;
  img: string | null;
};
const Login = ({ isloggedin, setlogin, name, img }: IType) => {
  const onClick = () => {
    setlogin(false);
  };
  if (isloggedin) {
    if (img === null)
      return (
        <CircleLink className='body3_BD' to='/my-page/profile'>
          {name[1]}
          {name[2]}
        </CircleLink>
      );
    return (
      <CircleLink to='/my-page/profile'>
        <img src={img} alt='img' />
      </CircleLink>
    );
  }
  return (
    <TextLink className='body2_SB' onClick={onClick}>
      시작하기
    </TextLink>
  );
};

type TrailingButtonMenu = {
  src: string;
  to: string;
};

const menu: TrailingButtonMenu[] = [
  {
    to: '/',
    src: '/icons/notification.svg',
  },
];

export const TrailingButtons: FC = () => {
  const loginInfo = useRecoilValue(loginInformation);
  const setStatus = useSetRecoilState(loginStatus);
  const menuButtons = menu.map(({ src, to }) => {
    return (
      <IconLink to={to} key={`menu-icon-buttons-${src}`}>
        <Icon src={src} />
      </IconLink>
    );
  });
  return (
    <Wrapper>
      {menuButtons}
      <Login
        isloggedin={loginInfo.loginStatus}
        setlogin={setStatus}
        name={loginInfo.name}
        img={loginInfo.img}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const IconLink = styled(Link)`
  display: block;
`;
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
const Icon = styled.img.attrs({
  role: 'button',
})`
  display: block;
  width: 24px;
  height: 24px;
  color: #c2c0bd;
`;
