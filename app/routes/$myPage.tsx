import styled from 'styled-components';
import MyPagePart from '~/components/myPage/myPage-common';
import { Outlet, useNavigate } from '@remix-run/react';
import { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import SettingPage from '~/components/myPage/profile/setting';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { loginInformation, clickSetting } from '~/recoils/user-info/atoms';

export default function DefaultMyPage() {
  const loginInfo = useRecoilValue(loginInformation);
  const navigate = useNavigate();
  useEffect(() => {
    if (loginInfo.isloggedin === false) {
      navigate('/');
    }
  });

  const [clicked, setClicked] = useRecoilState(clickSetting);
  const { scrollY } = useScroll();
  return (
    <Wrapper>
      <MyPagePart />
      <Outlet />
      <AnimatePresence>
        {clicked.skill ? (
          <>
            <Overlay
              onClick={() =>
                setClicked({
                  skill: !clicked.skill,
                  interest: false,
                  tag: false,
                })
              }
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <Animi layoutId='setting' style={{ top: scrollY.get() + 50 }}>
              {clicked.skill ? <SettingPage clicked='skills' /> : null}
            </Animi>
          </>
        ) : null}
        {clicked.interest ? (
          <>
            <Overlay
              onClick={() =>
                setClicked({
                  skill: false,
                  interest: !clicked.interest,
                  tag: false,
                })
              }
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <Animi layoutId='interest' style={{ top: scrollY.get() + 50 }}>
              {clicked.interest ? <SettingPage clicked='interests' /> : null}
            </Animi>
          </>
        ) : null}
        {clicked.tag ? (
          <>
            <Overlay
              onClick={() =>
                setClicked({
                  skill: false,
                  interest: false,
                  tag: !clicked.tag,
                })
              }
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <Animi layoutId='tag' style={{ top: scrollY.get() + 50 }}>
              {clicked.tag ? <SettingPage clicked='tags' /> : null}
            </Animi>
          </>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  padding: 95px 0px;
  background-color: #d5d5d5;
`;
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 101vw;
  margin-left: calc(-50vw + 50%);

  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: saturate(180%) blur(7px);
  opacity: 0;
`;
const Animi = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: white;
  border-radius: 20px;
  overflow-y: scroll;
`;
