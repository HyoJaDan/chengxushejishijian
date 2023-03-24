import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { loginStatus } from '~/data/recoils/user/common/login-information';
import LoginComponent from './login';

export function LoginWrapper() {
  const [type, setType] = useRecoilState(loginStatus);

  return (
    <div>
      {type === 'unLogin' ? (
        <>
          <Overlay
            onClick={() => {
              setType('unChecked');
            }}
          />
          <LoginBackground>
            <LoginComponent />
          </LoginBackground>
        </>
      ) : null}
    </div>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 101vw;
  margin-left: calc(-50vw + 50%);

  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: saturate(180%) blur(7px);
  z-index: 2;
`;
const LoginBackground = styled.div`
  position: fixed;
  width: 616px;
  height: 654px;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  background-color: ${(prop) => prop.theme.color.basic.white};
  box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  z-index: 3;
`;
