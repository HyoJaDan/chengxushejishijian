import styled from "styled-components";
import {useState,useRef} from "react";
import jwt_deocde from "jwt-decode";
import { useScript } from '../hooks/useScript';
import { GOOGLE_SCRIPT, GOOGLE_CLIENT_ID } from "~/hooks/OAuth";

export default function GoogleLogin() {
  const googleButtonRef = useRef();
  const [user, setUser] = useState(false);

  const onGoogleSignIn = (usr: any) => {
    console.log("usr", usr);
    let userCred = usr.credential;
    let payload = jwt_deocde(userCred);
    setUser(payload);
  }
  
  useScript(GOOGLE_SCRIPT , () => {
    window.google.accounts.id.initialize({
      client_id:GOOGLE_CLIENT_ID,
      callback: onGoogleSignIn,
    });
    
    window.google.accounts.id.renderButton(googleButtonRef.current, {
      size: "medium",
      type: "icon",
    });
  })
  return (
    <div>
      <DIV>
        <Google ref={googleButtonRef}/>
        구글로 계속하기
      </DIV>
      {user && (
        <div>
          <h1>hello, {user.name}</h1>
          <button onClick={() => {
            setUser(false);
          }}>
            logOut
          </button>
        </div>
      )}
    </div>
  );
}
const DIV = styled.div`
  width: 463px;
  height: 80px;
  background: #EEEEEE;
  border-radius: 15px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`;
const Google = styled.div`

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;