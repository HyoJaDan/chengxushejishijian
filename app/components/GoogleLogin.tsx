import styled from "styled-components";
import {useState,useRef} from "react";
import jwt_deocde from "jwt-decode";
import { useScript } from '../hooks/useScript';
<<<<<<< HEAD
import { GOOGLE_SCRIPT, GOOGLE_CLIENT_ID } from "~/hooks/OAuth";
=======
>>>>>>> 1f94979 (Done GoogleLogIn)

export default function GoogleLogin() {
  const googleButtonRef = useRef();
  const [user, setUser] = useState(false);
<<<<<<< HEAD
  
  const onGoogleSignIn = (usr: any) => {
    console.log("usr", usr);
=======

  const onGoogleSignIn = (usr) => {
>>>>>>> 1f94979 (Done GoogleLogIn)
    let userCred = usr.credential;
    let payload = jwt_deocde(userCred);
    setUser(payload);
  }
  
<<<<<<< HEAD
  useScript(GOOGLE_SCRIPT , () => {
    window.google.accounts.id.initialize({
      client_id:GOOGLE_CLIENT_ID,
=======
  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id: "815490852595-tor320oi16paha7tmhs4belkjrcj9k5n.apps.googleusercontent.com",
>>>>>>> 1f94979 (Done GoogleLogIn)
      callback: onGoogleSignIn,
    });
    
    window.google.accounts.id.renderButton(googleButtonRef.current, {
<<<<<<< HEAD
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
=======
      size: "large",
    });
  })
  
  return (
    <div>
      <Google ref={googleButtonRef}>구글로 계속하기</Google>
>>>>>>> 1f94979 (Done GoogleLogIn)
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
<<<<<<< HEAD
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
=======
const Google = styled.div`
  width: 463px;
  height: 80px;

  background: #EEEEEE;
  border-radius: 15px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
/* 
815490852595-tor320oi16paha7tmhs4belkjrcj9k5n.apps.googleusercontent.com
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
*/
>>>>>>> 1f94979 (Done GoogleLogIn)
