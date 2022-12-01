import { redirect } from '@remix-run/node';
import { loginInformation } from '~/recoils/user-info/atoms';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

export default function Mypage() {
  const loginInfo = useRecoilValue(loginInformation);

  if (loginInfo.isloggedin) return redirect(`/${loginInfo.name}/profile`);
  return <Wrapper />;
}
const Wrapper = styled.div``;
