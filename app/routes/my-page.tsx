import { Outlet } from '@remix-run/react';
import styled from 'styled-components';
import MyPageHeader from '~/components/common/sub-navigation-bar';
import UserInformation from '~/components/myPage/profile/main-content/UserInformation';
import SSRSafeSuspense from '~/hooks/ssr-safe-suspense';

export default function DefaultMyPage() {
  return (
    <Wrapper>
      <MyPageHeader page='Mypage' />
      <SSRSafeSuspense>
        <CommonWrapper>
          <UserInformation />
        </CommonWrapper>
      </SSRSafeSuspense>
      <Outlet />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const CommonWrapper = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  display: flex;
  justify-content: center;
  padding-top: 24px;
`;
