import { Outlet, useNavigate, useParams } from '@remix-run/react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyPageHeader from '~/components/common/sub-navigation-bar';
import UserInformation from '~/components/myPage/profile/main-content/UserInformation';

export default function DefaultMyPage() {
  const { nickname } = useParams();
  const navigate = useNavigate();
  if (nickname === undefined) navigate('/');
  const [isSetting, setIsSetting] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const [, , , , , , adress] = window.location.href.split('/');
    if (adress === 'setting') setIsSetting(true);
    else setIsSetting(false);
  });
  return (
    <Wrapper>
      <MyPageHeader page={nickname as string} />
      {isSetting ? null : (
        <CommonWrapper>
          <UserInformation nickName={nickname} />
        </CommonWrapper>
      )}
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
