import { Link } from '@remix-run/react';
import styled from 'styled-components';
import type { FCClass } from '../types/function-component';

export const NavButtons: FCClass = ({ className }) => {
  const menus = [
    ['홈', '/'],
    ['과제', '/assignments'],
    ['Q&A', '/qna'],
  ];

  const buttons = menus.map(([text, to]) => (
    <NavButton to={to} key={`nav-link-to-${text}`}>
      {text}
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
