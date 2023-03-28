import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  localStorageData,
  loginStatus,
} from '~/data/user/common/login-information';

export const WaitAnswer = () => {
  const localData = useRecoilValue(localStorageData);
  const setLoginStatus = useSetRecoilState(loginStatus);

  return (
    <Wrapper>
      <Letters>
        <LineOne className='body1_BD'>
          {localData.loginStatus
            ? `${localData.name} 님의 풀이를 기다리고 있어요 `
            : '더풀러들의 풀이를 기다리고 있어요.'}
        </LineOne>
        <LineTwo className='body3_MD'>
          나의 풀이를 제출하고 다른 사용자의 풀이를 살펴보세요
        </LineTwo>
      </Letters>
      {localData.loginStatus ? (
        <Button
          className='body2_SB'
          onClick={() => {
            console.log('hello');
          }}
        >
          풀이 제출하기
        </Button>
      ) : (
        <Button
          className='body2_SB'
          onClick={() => {
            setLoginStatus('unLogin');
          }}
        >
          풀이 제출하기
        </Button>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 1149px;
  height: 102px;
  padding: 25px 24px;
  background-color: ${(prop) => prop.theme.color.primary.blue.blue_600};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const Letters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
  width: 135px;
  height: 54px;
  background: #ffffff;
  border-radius: 100px;
  color: ${(prop) => prop.theme.color.primary.blue.blue_600};
  cursor: pointer;
`;
const LineOne = styled.div`
  color: white;
`;
const LineTwo = styled.div`
  color: ${(prop) => prop.theme.color.primary.blue.blue_200};
`;
