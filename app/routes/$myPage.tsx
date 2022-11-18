import styled from 'styled-components';
import MyPagePart from '~/components/myPage/myPagePart';
import { Outlet, useNavigate } from '@remix-run/react';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { loginInformation } from '~/recoils/user-info/atoms';

export default function DefaultMyPage() {
  const loginInfo = useRecoilValue(loginInformation);
  const navigate = useNavigate();
  useEffect(() => {
    if (loginInfo.isloggedin === false) {
      navigate('/');
    }
  });
  return (
    <Wrapper>
      <MyPagePart />
      <Outlet />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  padding: 95px 0px;
  background-color: #d5d5d5;
`;
