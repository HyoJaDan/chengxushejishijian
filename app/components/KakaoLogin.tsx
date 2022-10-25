import styled from "styled-components";

export default function KakaoLogin() {
  const CLIENT_ID = "3e9c669c67ad90137b5fa81e117199f5";
  const REDIRECT_URI = "http://localhost:3000/logIn";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
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
