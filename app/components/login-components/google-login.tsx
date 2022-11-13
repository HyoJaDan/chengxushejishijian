import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { loginInformation,platform } from '~/recoils/user-info/atoms';
import { useNavigate } from '@remix-run/react';

export default function GoogleLogin() {
  const navigate = useNavigate();
  const  setLoginInfo = useSetRecoilState(loginInformation);
  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`
          }
        },
        )
        setLoginInfo({
          isloggedin: true,
          platform: platform.Google,
          name: userInfo.data.name,
        });
      navigate("/login/Detail");
    },
    onError: errorResponse => console.log(errorResponse),
  })
  
  return (
    <div>
      <Google onClick={() => { login(); }}>
        구글로 계속하기
      </Google>
    </div>
  );
}
const Google = styled.div`
  width: 463px;
  height: 80px;
  background: #EEEEEE;
  border-radius: 15px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`;