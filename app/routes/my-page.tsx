import { Outlet } from '@remix-run/react';
import { AnimatePresence, useScroll } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import MyPageHeader from '~/components/myPage/myPage-header';
import OutputOverlay from '~/components/myPage/outputOverlay';
import { clickSetting } from '~/recoils/user-info/atoms';

export default function DefaultMyPage() {
  const clicked = useRecoilValue(clickSetting);
  const { scrollY } = useScroll();
  return (
    <Wrapper>
      <MyPageHeader />
      <Outlet />
      <AnimatePresence>
        {clicked !== undefined ? (
          <OutputOverlay clickedOverlay={clicked} scroll={scrollY.get()} />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
