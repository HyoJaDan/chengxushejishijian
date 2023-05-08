import { Link } from '@remix-run/react';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import styled from 'styled-components';
import {
  localStorageData,
  loginStatus,
} from '~/data/user/common/login-information';

export const Login = () => {
  const [localData, setLocalData] = useRecoilState(localStorageData);
  const setLogin = useSetRecoilState(loginStatus);
  const [isTrue, setIsTrue] = useState<boolean>(true);
  const myPageURL = `/my-page/${localData.name}/profile`;
  if (localData.loginStatus === 'login') {
    if (localData.img === '') return <Circle className='body3_BD' />;
    return (
      <div>
        <Circle onClick={() => setIsTrue(!isTrue)}>
          <Img src={localData.img} alt='' />
        </Circle>
        {isTrue === false ? (
          <div>
            <Overlay onClick={() => setIsTrue(true)} />
            <Page isTrue={isTrue ? 1 : 0}>
              {localData.img === '' ? (
                <MainCircle className='body3_BD' />
              ) : (
                <MainCircle className='body3_BD'>
                  <Img src={localData.img} alt='' />
                </MainCircle>
              )}
              <UserFlex>
                <UserName className='body2_BD'>{localData.name}</UserName>
                <UserJob className='caption1_RG'>{localData.job}</UserJob>
              </UserFlex>
              <MyPage
                to={myPageURL}
                className='caption1_RG'
                onClick={() => setIsTrue(true)}
              >
                마이페이지
              </MyPage>
              <Logout
                to='/'
                onClick={() => {
                  setIsTrue(true);
                  setLocalData({
                    loginStatus: 'unChecked',
                    name: '',
                    accessToken: '',
                    id: 0,
                    img: '',
                    job: '',
                  });
                }}
              >
                로그아웃
              </Logout>
            </Page>
          </div>
        ) : null}
      </div>
    );
  }
  return (
    <TextLink className='body2_SB' onClick={() => setLogin('unLogin')}>
      시작하기
    </TextLink>
  );
};
const TextLink = styled.div`
  cursor: pointer;
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
`;
const Circle = styled.div`
  display: grid;
  place-content: center;
  width: 32px;
  height: 32px;
  background-color: #c2c0bd;
  clip-path: circle(50%);
  color: ${(prop) => prop.theme.color.basic.black};
  cursor: pointer;
  position: relative;
`;
const MainCircle = styled(Circle)`
  width: 80px;
  height: 80px;
`;
const Img = styled.img`
  width: 100%;
`;
const Page = styled.div<{ isTrue: boolean }>`
  position: absolute;
  width: 256px;
  height: 283px;
  right: -50px;
  top: 78px;
  padding: 24px 40px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 5px 5px 4px #d9d9d9, 5px 5px 18px #d9d9d9;
  z-index: 10;

  &:before {
    border-bottom: 26px solid #ffffff;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    content: '';
    height: 0;
    left: 175px;
    position: absolute;
    top: -26px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: auto;
  ${({ isTrue }) => isTrue && `display:none;`}
`;
const UserFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UserName = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;
const UserJob = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_700};
`;
const MyPage = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px 13px;
  gap: 8px;
  border-radius: 100px;
  width: 176px;
  height: 46px;
  background-color: ${(prop) => prop.theme.color.primary.blue.blue_500};
  color: ${(prop) => prop.theme.color.basic.white};
`;
const Logout = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px 13px;
  gap: 8px;

  width: 176px;
  height: 46px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_300};
  border-radius: 100px;
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;

const Overlay = styled.div`
  position: absolute;
  top: -19px;
  width: 101vw;
  height: 100vh;
  margin-left: -90vw;
  z-index: 2;
  cursor: default;
`;
