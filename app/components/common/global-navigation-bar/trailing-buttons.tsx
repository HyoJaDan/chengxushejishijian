import { Link } from '@remix-run/react';
import type { FC } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { loginInformation } from '~/recoils/user-info/atoms';

type TrailingButtonMenu = {
  src: string;
  to: string;
};
type IType = {
  isloggedin: boolean;
  name: string;
};
const menu: TrailingButtonMenu[] = [
  {
    to: '/',
    src: '/icons/search.svg',
  },
  {
    to: '/',
    src: '/icons/email.svg',
  },
  {
    to: '/',
    src: '/icons/notifications.svg',
  },
];
const Login = ({ isloggedin, name }: IType) => {
  const output = name.substring(0, 1);

  if (isloggedin) {
    return <CircleLink to='/my-page/profile'>{output}</CircleLink>;
  }
  return <TextLink to='login'>로그인</TextLink>;
};
export const TrailingButtons: FC = () => {
  const loginInfo = useRecoilValue(loginInformation);
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
      <Login isloggedin={loginInfo.isloggedin} name={loginInfo.name} />
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
const TextLink = styled(Link)`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */

  color: #ffffff;
`;
const CircleLink = styled(Link)`
  display: grid;
  place-content: center;
  width: 32px;
  height: 32px;
  background-color: white;
  clip-path: circle(50%);
`;
const Icon = styled.img.attrs({
  role: 'button',
})`
  display: block;
  width: 24px;
`;
