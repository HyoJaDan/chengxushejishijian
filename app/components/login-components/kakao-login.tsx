import React from "react";
import { useSubmit } from '@remix-run/react';
import styled from "styled-components";
/* import { useRecoilState } from 'recoil';
import { loginInformation, platform } from '~/recoil/user-info/atoms'; */
import { loadSdk, DEFAULT_STYLE } from "../../hooks/login-scipt/kakao-script";
import type{ ExtendedWindow, Props, State } from "./kakao-types";

declare let window: ExtendedWindow;

export default class KakaoLogin extends React.PureComponent<Props, State> {
  
  public static DEFAULT_STYLE = DEFAULT_STYLE;

  constructor(props : any) {
    super(props);
    this.state={
      isLoggedIn: false 
    }
  }

  public async componentDidMount() {
    const { token } = this.props;
    await loadSdk();
    window.Kakao.init(token);
  }

  private onButtonClick = () => {
    const {
      throughTalk = true,
      persistAccessToken = true,
      needProfile = true,
      useLoginForm = false,
      onSuccess,
      onFail,
    } = this.props;
    const method = useLoginForm ? "loginForm" : "login";

    (window.Kakao.Auth)[method]({
      throughTalk,
      persistAccessToken,
      success: (response) => {
        this.setState({ isLoggedIn: true });

        if (needProfile) {
          window.Kakao?.API.request({
            url: "/v2/user/me",
            success: (profile) => {
              const result = { response, profile };
              onSuccess(result);
              let a= profile.properties.nickname
              
            },
            fail: onFail,
          });
        } else {
          onSuccess({ response });
        }
        submit(null, { action: "/login/Detail" });
      },
      fail: onFail,
    });
  };

  private onLogout = () => {
    const { onLogout } = this.props;
    window.Kakao?.Auth.logout(() => {
      onLogout?.(window.Kakao?.Auth.getAccessToken());
      this.setState({ isLoggedIn: false });
    });
  };

  public render() {
    /* const [loginInfo, setLoginInfo] = useRecoilState(loginInformation); */
    const submit = useSubmit();
    const { isLoggedIn } = this.state;
    const onClick = isLoggedIn ? this.onLogout : this.onButtonClick;
    const {
      render,
      className = "",
      style = DEFAULT_STYLE,
      children = "카카오톡으로 계속하기",
    } = this.props;
    if (typeof render === "function") {
      return render({ onClick });
    }

    return (
      <Button
        className={className}
        onClick={onClick}
        style={style}
      >
        {children}
      </Button>
    );
  }
}
const Button = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color:black;
`;