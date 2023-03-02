import { NavLink } from '@remix-run/react';
import { useEffect, useState } from 'react';
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

  const [URL, setURL] = useState<String>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    let [, , , temp] = window.location.href.split('/');
    if (temp === 'solution') temp = '';
    setURL(temp);
  });

  const links = pages.map(({ title, link }, index) => {
    const id = `${link}_${index}`;
    const [temp] = link.split('/');

    return (
      <Link isTrue={URL === temp} key={id} to={link} end>
        {title}
      </Link>
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
const Link = styled(NavLink)<{ isTrue: boolean }>`
  color: #a4a2a0;
  ${({ isTrue }) => isTrue && `color:#31302F`}
`;
