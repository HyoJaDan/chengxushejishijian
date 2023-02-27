import { NavLink } from '@remix-run/react';
import styled from 'styled-components';
import type { FCClass } from '../types/function-component';

interface IPages {
  title: string;
  link: string;
}
export const NavButtons: FCClass = ({ className }) => {
  const pages: IPages[] = [
    { title: '트레이닝', link: '/' },
    { title: '마이페이지', link: 'my-page/profile' },
  ];

  const links = pages.map(({ title, link }, index) => {
    const id = `${link}_${index}`;
    return (
      <NavLink
        key={id}
        to={link}
        style={({ isActive }) => ({
          color: isActive ? '#31302F' : '#A4A2A0',
        })}
      >
        {title}
      </NavLink>
    );
  });

  return <Wrapper>{links}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 28px;
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
`;
