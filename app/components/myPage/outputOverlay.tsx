import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import SettingPage from '~/components/myPage/profile/setting';
import type { IClickSetting } from '~/recoils/user-info/atoms';
import { clickSetting } from '~/recoils/user-info/atoms';

interface clickedOverlayProp {
  clickedOverlay: Exclude<IClickSetting, undefined>;
  scroll: number;
}
export default function OutputOverlay({
  clickedOverlay,
  scroll,
}: clickedOverlayProp) {
  const [clicked, setClicked] = useRecoilState(clickSetting);
  return (
    <>
      <Overlay
        onClick={() => setClicked(clickedOverlay)}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <Animi layoutId={clickedOverlay} style={{ top: scroll + 50 }}>
        {clicked === clickedOverlay ? (
          <SettingPage clicked={clickedOverlay} />
        ) : null}
      </Animi>
    </>
  );
}
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
