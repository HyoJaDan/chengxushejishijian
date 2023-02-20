import { NavLink } from '@remix-run/react';
import styled from 'styled-components';

interface IPages {
  title: string;
  link: string;
}

export const Navigaion = () => {
  const pages: IPages[] = [
    { title: '전체', link: '/QnA' },
    { title: '많이 본 Q&A', link: 'popularQ&A' },
    { title: '새로운 질문', link: 'newQ&A' },
  ];

  const links = pages.map(({ title, link }, index) => {
    const id = `${link}_${index}`;
    return (
      <NavLink
        key={id}
        to={link}
        style={({ isActive }) => ({
          color: isActive ? '#2478F6' : 'rgba(31, 31, 31, 0.6)',
        })}
      >
        {title}
      </NavLink>
    );
  });
  return (
    <Wrapper>
      <FlexWrapper>
        <Category>
          <Header>커뮤니티</Header>
          <NavigationBar>{links}</NavigationBar>
        </Category>
        <Button>질문하기</Button>
      </FlexWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: sticky;
  padding: 17px 10px;
  top: 56px;
  z-index: 1;
  display: flex;
  align-items: center;
  height: 62px;
  background: #ffffff;
`;
const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(100%, 1200px);
  margin: 0 auto;
`;
const Category = styled.div`
  display: flex;
  gap: 24px;
`;
const Header = styled.header`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #31302f;
`;
const NavigationBar = styled.nav`
  display: flex;
  gap: 24px;
  align-items: center;
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px 13px;
  gap: 8px;
  width: 92px;
  height: 46px;
  background: #2bc0ef;
  border-radius: 100px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  /* Basic/White */

  color: #ffffff;
`;
