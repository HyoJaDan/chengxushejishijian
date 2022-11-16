import { Link } from '@remix-run/react';
import styled from 'styled-components';
import type { FCClass } from '../types/function-component';

type LinkType = {
  title: string;
  link: string;
};
const menus: LinkType[] = [
  {
    title: '홈',
    link: '/',
  },
  {
    title: '과제',
    link: '/assignments',
  },
  {
    title: 'Q&A',
    link: '/qna',
  },
];
export const NavButtons: FCClass = ({ className }) => {
  const buttons = menus.map(({ title, link }) => (
    <NavButton to={link} key={`nav-link-to-${title}`}>
      {title}
    </NavButton>
  ));
  return <Wrapper>{...buttons}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 28px;
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  color: #ffffff;
`;

const NavButton = styled(Link)`
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;
