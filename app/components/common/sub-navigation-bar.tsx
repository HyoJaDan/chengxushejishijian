import { Link } from '@remix-run/react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface IPageName {
  title: string;
  link: string;
}
export default function MyPageHeader({ page }: { page: string }) {
  const [whichLocation, setWhichLocation] = useState('profile');
  useEffect(() => {
    const [, , , , , location] = window.location.href.split('/');
    setWhichLocation(location);
  });
  const myPages: IPageName[] = [
    { title: '프로필', link: `${page}/profile` },
    { title: '저장한 문제', link: `${page}/archive` },
    { title: '제출한 풀이', link: `${page}/setting` },
    { title: '좋아요', link: `${page}/setting` },
  ];

  const MyPagelinks = myPages.map(({ title, link }, index) => {
    const id = `${link}_${index}`;
    const [, nowLink] = link.split('/');
    let isTrue;
    nowLink === whichLocation ? (isTrue = true) : (isTrue = false);
    return (
      <Links key={id} to={link} isactive={isTrue ? 1 : 0}>
        {title}
      </Links>
    );
  });

  return (
    <Wrapper>
      <FlexWrapper>
        <Gap>
          <Content className='body2_BD'>{MyPagelinks}</Content>
        </Gap>
        <Blank />
      </FlexWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(prop) => prop.theme.color.basic.white};
  position: sticky;
  height: 62px;
  top: 72px;
  z-index: 1;
`;
const FlexWrapper = styled.div`
  width: min(100%, 1256px);
  padding-top: 6px;
`;
const Gap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 936px;
  gap: 24px;
`;
const Blank = styled.div`
  width: 296px;
`;
const Content = styled.div`
  display: flex;
`;
const Links = styled(Link)<{ isActive: boolean }>`
  color: #a4a2a0;
  padding: 16px 13px;

  &.active {
    color: ${(prop) => prop.theme.color.grayScale.gray_800};
    border-bottom: 2px solid #2bc0ef;
  }
  ${({ isactive }) =>
    isactive &&
    `color: grey;
    border-bottom: 2px solid #2bc0ef;`}
`;
