import { Link } from '@remix-run/react';
import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getUserData, userId } from '~/recoils/user-info/atoms';

const UserInfoLeftFunction = () => {
  const Id = useRecoilValue(userId);
  const user = useRecoilValue(getUserData(Id));
  return (
    <Content>
      <Temp />
      <LeftUserNickName>{user.nickname}</LeftUserNickName>
      <LeftUserJobPool>{user.job}</LeftUserJobPool>
      <LeftTemp>팔로워 0명 팔로잉 0명</LeftTemp>
      <LeftSetting to='setting'>수정하기</LeftSetting>
    </Content>
  );
};

export default function UserInfoLeft() {
  const Id = useRecoilValue(userId);
  return (
    <Wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        {Id !== undefined && <UserInfoLeftFunction />}
      </Suspense>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  border-right: 1px solid #efedea;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
  align-items: start;
`;
const LeftUserNickName = styled.div`
  font-weight: 800;
  font-size: 24px;
`;
const LeftUserJobPool = styled.div`
  font-weight: 500;
  font-size: 20px;
`;
const LeftTemp = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
`;
const LeftSetting = styled(Link)`
  width: 99px;
  height: 30px;
  margin-top: 12px;
  background: #d9d9d9;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  /* or 21px */

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #ffffff;
  &:hover {
    color: #2478f6;
  }
`;

const Temp = styled.div`
  width: 77px;
  height: 77px;

  background: #d9d9d9;
  border: 2px solid #d9d9d9;
  border-radius: 38.5px;
`;
