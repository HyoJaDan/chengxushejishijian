import { redirect } from '@remix-run/node';
import { loginInformation } from '~/recoils/user-info/atoms';
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { useNavigate } from '@remix-run/react';
import styled from 'styled-components';

export default function Mypage() {
  const loginInfo = useRecoilValue(loginInformation);
  const navigate = useNavigate();
  if (loginInfo.isloggedin) return redirect(`/${loginInfo.name}/profile`);
  return (
    <Wrapper>
      <Div>hello</Div>
      <Div2>2</Div2>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
const Div = styled.div``;
const Div2 = styled.div``;
