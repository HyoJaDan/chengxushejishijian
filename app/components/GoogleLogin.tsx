import styled from "styled-components";
import {useState,useRef} from "react";
import jwt_deocde from "jwt-decode";
import { useScript } from '../hooks/useScript';

export default function GoogleLogin() {
  const googleButtonRef = useRef();
  const [user, setUser] = useState(false);

  const onGoogleSignIn = (usr:any) => {
    let userCred = usr.credential;
    let payload = jwt_deocde(userCred);
    setUser(payload);
  }
  
  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id: "815490852595-tor320oi16paha7tmhs4belkjrcj9k5n.apps.googleusercontent.com",
      callback: onGoogleSignIn,
    });
    
    window.google.accounts.id.renderButton(googleButtonRef.current, {
      size: "medium",
      type: "icon",
    });
  })
  return (
    <div>
      <Button
        onClick={() => {
        }}>
        <Google ref={googleButtonRef}/>
        구글로 계속하기
      </Button>
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
const Button = styled.div`
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
/* 
815490852595-tor320oi16paha7tmhs4belkjrcj9k5n.apps.googleusercontent.com
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
*/