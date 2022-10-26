import styled from "styled-components";
import useScript from "~/hooks/useScript";

export default function KakaoLogin() {
  const CLIENT_ID = "3e9c669c67ad90137b5fa81e117199f5";
  const REDIRECT_URI = "http://localhost:3000/logIn";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  useScript("https://t1.kakaocdn.net/kakao_js_sdk/2.0.0/kakao.min.js" , () => {
    window.Kakao.init('50ad32cbd67e304637f14d4a7155a9b3');
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
