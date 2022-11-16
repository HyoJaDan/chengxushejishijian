import { Link } from '@remix-run/react';
import type { FC } from 'react';
import styled from 'styled-components';

type TrailingButtonMenu = {
  src: string;
  to: string;
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
export const TrailingButtons: FC = () => {
  const menuButtons = menu.map(({ src, to }) => (
    <IconLink to={to} key='menu-icon-buttons-$to'>
      <Icon src={src} />
    </IconLink>
  ));
  return (
    <Wrapper>
      {menuButtons}
      <Avatar>v</Avatar>
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

const Icon = styled.img.attrs({
  role: 'button',
})`
  display: block;
  width: 24px;
`;

const Avatar = styled.div.attrs({
  role: 'button',
})`
  display: grid;
  place-content: center;
  width: 32px;
  height: 32px;
  background-color: white;
  clip-path: circle(50%);
`;
