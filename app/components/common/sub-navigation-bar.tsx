import { NavLink } from '@remix-run/react';
import styled from 'styled-components';

interface IPageName {
  title: string;
  link: string;
}

type whichPage = 'Mypage' | 'Training';
interface IPage {
  page: whichPage;
}
export default function MyPageHeader({ page }: IPage) {
  const myPages: IPageName[] = [
    { title: '프로필', link: 'profile' },
    { title: '저장한 문제', link: 'archive' },
    { title: '제출한 풀이', link: 'setting' },
    { title: '좋아요', link: 'setting' },
  ];
  const trainPages: IPageName[] = [
    { title: '문제', link: '/' },
    { title: '풀이', link: '/solution' },
  ];

  const MyPagelinks = myPages.map(({ title, link }, index) => {
    const id = `${link}_${index}`;
    return (
      <Link key={id} to={link}>
        {title}
      </Link>
    );
  });
  const trainLinks = trainPages.map(({ title, link }, index) => {
    const id = `${link}_${index}`;
    return (
      <Link key={id} to={link}>
        {title}
      </Link>
    );
  });
  return (
    <Wrapper>
      <FlexWrapper>
        <Gap>
          {page === 'Mypage' ? (
            <Content className='body2_BD'>{MyPagelinks}</Content>
          ) : (
            <Content>{trainLinks}</Content>
          )}
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
const Link = styled(NavLink)`
  color: #a4a2a0;
  padding: 16px 13px;

  &.active {
    color: ${(prop) => prop.theme.color.grayScale.gray_800};
    border-bottom: 2px solid #2bc0ef;
  }
`;
