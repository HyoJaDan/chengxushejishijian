/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import axios from 'axios';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { CopyLink } from '~/components/problem/copy-link';
import { solutionAddress } from '~/data/constants/adress';
import {
  localStorageData,
  loginStatus,
} from '~/data/user/common/login-information';

interface IGetData {
  isBookmark: boolean;
  id: string;
  thumbnail: string;
  navigate: Function;
}
export const SolutionBanner = ({
  isBookmark,
  id,
  thumbnail,
  navigate,
}: IGetData) => {
  const localData = useRecoilValue(localStorageData);
  const setLoginStatus = useSetRecoilState(loginStatus);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(isBookmark);
  const clickBookmark = () => {
    if (localData.loginStatus === 'unChecked') setLoginStatus('unLogin');
    else {
      setIsBookmarked(!isBookmarked);
      if (isBookmarked) {
        axios.delete(`${solutionAddress}/${id}/likes`, {
          headers: {
            Authorization: `Bearer ${localData.accessToken}`,
          },
        });
      } else {
        axios.post(`${solutionAddress}/${id}/likes`, null, {
          headers: {
            Authorization: `Bearer ${localData.accessToken}`,
          },
        });
      }
    }
  };
  return (
    <Sticky>
      <Wrapper>
        <Flex>
          <ProblemCircle
            onClick={() => {
              navigate('/');
            }}
          >
            {thumbnail !== '' ? <Img src={thumbnail} alt='' /> : null}
          </ProblemCircle>
          <Title>문제</Title>
        </Flex>
        <Flex>
          <Circle onClick={clickBookmark}>
            <div className={`cross ${isBookmarked ? 'checked' : ''}`} />
          </Circle>
          {isBookmarked ? (
            <Title className='body3_MD'>저장완료!</Title>
          ) : (
            <Title className='body3_MD'>풀이 저장</Title>
          )}
        </Flex>
        <Flex>
          <CopyLink />
        </Flex>
      </Wrapper>
    </Sticky>
  );
};
const Sticky = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: sticky;
  top: 72px;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;
const Circle = styled.div`
  width: 54px;
  height: 54px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Title = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_600};
`;
const Img = styled.img`
  cursor: pointer;
`;
const ProblemCircle = styled(Circle)`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_300};
`;
