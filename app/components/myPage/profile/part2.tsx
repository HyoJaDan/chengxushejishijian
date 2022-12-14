import { Link } from '@remix-run/react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userData } from '~/recoils/user-info/atoms';

export default function Part2() {
  const user = useRecoilValue(userData);
  return (
    <Wrapper>
      <Left>
        <LeftUserNickName>{user.nickName}</LeftUserNickName>
        <LeftUserJobPool>{user.jobPool}</LeftUserJobPool>
        <LeftTemp>팔로워 0명 팔로잉 0명</LeftTemp>
        <LeftSetting to='setting'>수정하기</LeftSetting>
      </Left>
      <Right>hello</Right>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 936px;
  height: 212px;
  background: #ffffff;
  border-radius: 8px;
  padding: 24px;
  display: flex;
`;
const Left = styled.div`
  flex-grow: 3.5;
  display: flex;
  flex-direction: column;
  font-family: 'Pretendard';
  font-style: normal;
  color: #1f1f1f;
  line-height: 150%;
  gap: 12px;
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
const Right = styled.div`
  flex-grow: 1;
`;
