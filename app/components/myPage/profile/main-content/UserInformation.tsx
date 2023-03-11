import { Link } from '@remix-run/react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useIdentifyLogin } from '~/hooks/userStatus/identify-login';
import { getFollower } from '~/recoils/user/follow';
import { getUserData } from '~/recoils/user/user-data';

const UserInformation = () => {
  const user = useRecoilValue(getUserData);
  useIdentifyLogin(user);
  const follow = useRecoilValue(getFollower);

  return (
    <Wrapper>
      <Content>
        <Header>
          <Profile>프로필</Profile>
          <Setting to='setting'>
            <SettingImg src='/icons/my-page/setting.svg' alt='my-page' />
            <SettingFont>수정하기</SettingFont>
          </Setting>
        </Header>
        <Main>
          <ThumbnailBackground>
            {`${user.thumbnail}` === null ? (
              <Thumbnail src={`${user.thumbnail}`} />
            ) : null}
          </ThumbnailBackground>
          <div>
            <UserNickName>{user.nickname}</UserNickName>
            <UserJobPool>{user.job}</UserJobPool>
            <Follow>
              <Follower>팔로워 {`${follow.numOfFollowers}`}명</Follower>
              <Following>팔로잉 {`${follow.numOfFollowings}`}명</Following>
            </Follow>
          </div>
        </Main>
      </Content>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 1256px;
  height: 212px;
  background: #ffffff;
  border: 1px solid #efedea;
  border-radius: 8px;
  padding: 32px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
  align-items: start;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 28px;
`;
const Profile = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: #31302f;
`;
const Main = styled.div`
  display: flex;
  gap: 24px;
`;
const UserNickName = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  /* identical to box height, or 28px */

  display: flex;
  align-items: center;
  text-align: center;

  /* grayscale/900 */

  color: #31302f;
`;
const UserJobPool = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  display: flex;
  align-items: flex-end;
  color: #787573;
`;
const Follow = styled.div`
  margin-top: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  gap: 16px;
`;
const Following = styled.div`
  display: flex;
  gap: 4px;
`;
const Follower = styled(Following)``;
const Setting = styled(Link)`
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 6.5px;

  width: 107px;
  height: 46px;
  background: #efedea;
  border-radius: 100px;

  &:hover {
    color: #2478f6;
  }
`;
const SettingFont = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: black;
`;
const SettingImg = styled.img``;
const ThumbnailBackground = styled.div`
  width: 96px;
  height: 96px;

  background: #d9d9d9;

  border-radius: 48px;
`;
const Thumbnail = styled.img``;
export default UserInformation;
