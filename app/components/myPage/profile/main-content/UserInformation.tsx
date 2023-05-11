/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/destructuring-assignment */
import { Link } from '@remix-run/react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { localUserData } from '~/data/my-page/user-data';
import { useCustomHook } from './customHook';

const UserInformation = (nickName: string) => {
  const [isMe, follow] = useCustomHook(nickName);
  const userData = useRecoilValue(localUserData);
  const myPageURL = `/my-page/${userData.nickname}/profile/setting`;
  if (follow !== undefined)
    return (
      <Wrapper>
        <Content>
          <Header>
            <Profile className='body1_BD'>프로필</Profile>
            {isMe ? (
              <Setting className='body3_BD' to={myPageURL}>
                <SettingImg src='/icons/my-page/setting.svg' alt='my-page' />
                <SettingFontBody3SB className='body3_SB'>
                  수정하기
                </SettingFontBody3SB>
              </Setting>
            ) : null}
          </Header>
          <Main>
            {userData.thumbnail === null ? (
              <Thumbnail />
            ) : (
              <Thumbnail as='img' src={userData.thumbnail} alt='' />
            )}
            <div>
              <UserNickName className='body1_BD'>
                {userData.nickname}
              </UserNickName>
              <UserJobPoolFontBody2SB className='body2_SB'>
                {userData.nickname}
              </UserJobPoolFontBody2SB>
              <Follow className='caption1_RG'>
                <Follower>팔로워 {`${follow.numOfFollowers}`}명</Follower>
                <Following>팔로잉 {`${follow.numOfFollowings}`}명</Following>
              </Follow>
            </div>
          </Main>
        </Content>
      </Wrapper>
    );
  return (
    <FallbackWrapper>
      <FallbackUserInformation />
    </FallbackWrapper>
  );
};
const Wrapper = styled.div`
  width: 1256px;
  height: 212px;
  background: ${(prop) => prop.theme.color.basic.white};
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
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;
const Main = styled.div`
  display: flex;
  gap: 24px;
`;
const UserNickName = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;
const UserJobPoolFontBody2SB = styled.div`
  display: flex;
  align-items: flex-end;
  color: ${(prop) => prop.theme.color.grayScale.gray_700};
`;
const Follow = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 16px;
`;
const Following = styled.div`
  display: flex;
  gap: 4px;
`;
const Follower = styled(Following)``;
const Setting = styled(Link)`
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
const SettingImg = styled.img``;
const SettingFontBody3SB = styled.div`
  color: ${(prop) => prop.theme.color.basic.black};
`;
const Thumbnail = styled.div`
  width: 96px;
  height: 96px;

  background: #d9d9d9;

  border-radius: 48px;
`;

export default UserInformation;
const FallbackWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const FallbackUserInformation = styled.div`
  width: 1256px;
  height: 212px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid #efedea;
  border-radius: 8px;
  padding: 56px 32px 32px 32px;
`;
