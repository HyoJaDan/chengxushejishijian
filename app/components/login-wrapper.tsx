import type { LoaderFunction } from '@remix-run/node';
import { AnimatePresence, motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userId } from '~/recoils/user-info/atoms';

export const loader: LoaderFunction = async () => {
  return [process.env.GOOGLE_CLIENT_ID, process.env.KAKAO_JS_API];
};

export default function LoginWrapper() {
  const Id = useRecoilValue(userId);
  /* const GOOGLE_CLIENT_ID = useLoaderData()[0]; */
  /* console.log(GOOGLE_CLIENT_ID); */
  return (
    <AnimatePresence>
      {Id === 'notLoggedin' ? (
        <div>
          <Overlay
            /* onClick={() => setClicked(clickedOverlay)} */
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <Animi layoutId='123' style={{ top: 100 }}>
            {/* <LoginIndex /> */}
          </Animi>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 101vw;
  margin-left: calc(-50vw + 50%);

  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: saturate(180%) blur(7px);
  opacity: 0;
`;
const Animi = styled(motion.div)`
  position: absolute;
  width: 616px;
  height: 654px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  overflow-y: scroll;
`;
