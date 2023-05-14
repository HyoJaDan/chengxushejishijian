/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import axios from 'axios';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { lessonAddress } from '~/data/constants/adress';
import {
  localStorageData,
  loginStatus,
} from '~/data/user/common/login-information';
import { CopyLink } from './copy-link';

interface IGetData {
  isBookmark: boolean;
  id: string;
}
export const ProblemBanner = ({ isBookmark, id }: IGetData) => {
  const localData = useRecoilValue(localStorageData);
  const setLoginStatus = useSetRecoilState(loginStatus);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(isBookmark);
  const clickBookmark = () => {
    if (localData.loginStatus === 'unChecked') setLoginStatus('unLogin');
    else {
      setIsBookmarked(!isBookmarked);
      if (isBookmarked) {
        axios.delete(`${lessonAddress}/${id}/bookmarks`, {
          headers: {
            Authorization: `Bearer ${localData.accessToken}`,
          },
        });
      } else {
        axios.post(`${lessonAddress}/${id}/bookmarks`, null, {
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
          <Circle onClick={clickBookmark}>
            <div className={`cross ${isBookmarked ? 'checked' : ''}`} />
          </Circle>
          {isBookmarked ? (
            <Title className='body3_MD'>저장완료!</Title>
          ) : (
            <Title className='body3_MD'>문제 저장</Title>
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
