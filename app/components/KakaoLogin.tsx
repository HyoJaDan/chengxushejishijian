import styled from "styled-components";
import useScript from "~/hooks/useScript";
import { KAKAO_AUTH_URL ,KAKAO_SCRIPT, KAKAO_JS_API} from '../hooks/OAuth';

export default function KakaoLogin() {
  useScript(KAKAO_SCRIPT , () => {
    window.Kakao.init(KAKAO_JS_API);
  })
  return (
    <div>
      <a href={KAKAO_AUTH_URL}>
        <Kakao>카카오톡으로 계속하기</Kakao>
      </a>
    </div>
  );
}
const Kakao = styled.div`
  width: 463px;
  height: 80px;

  background: #FFE459;
  border-radius: 15px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
