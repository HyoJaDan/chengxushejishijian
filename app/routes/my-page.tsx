import { Outlet } from '@remix-run/react';
/* import { useScroll } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { clickSetting } from '~/recoils/user-info/atoms'; */
import styled from 'styled-components';
import MyPageHeader from '~/components/common/sub-navigation-bar';
import { useIdentifyLogin } from '~/hooks/userStatus/identify-login';

export default function DefaultMyPage() {
  useIdentifyLogin();
  /*   const clicked = useRecoilValue(clickSetting);
  const { scrollY } = useScroll(); */

  return (
    <Wrapper>
      <MyPageHeader page='Mypage' />
      <Outlet />
      {/* <AnimatePresence>
        {clicked !== undefined ? (
          <OutputOverlay clickedOverlay={clicked} scroll={scrollY.get()} />
        ) : null}
      </AnimatePresence> */}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
