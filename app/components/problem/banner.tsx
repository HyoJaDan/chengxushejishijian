/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import axios from 'axios';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { lessonAddress } from '~/data/constants/adress';
import { localStorageData } from '~/data/user/common/login-information';

interface IGetData {
  isBookmark: boolean;
  isLike: boolean;
  id: string;
}
export const Banner = ({ isBookmark, isLike, id }: IGetData) => {
  console.log(isBookmark, isLike, id);
  const localData = useRecoilValue(localStorageData);
  const [isCopy, setIsCopy] = useState<boolean>(false);
  console.log(localData.accessToken);
  const clickBookmark = () => {
    if (isLike) {
      console.log('delte');
      axios.delete(
        `${lessonAddress}/${id}/bookmarks`,
        /* {
          isBookmark: false,
        }, */
        {
          headers: {
            Authorization: `Bearer ${localData.accessToken}`,
          },
        }
      );
    } else {
      console.log('hello');
      axios.post(`${lessonAddress}/${id}/bookmarks`, null, {
        headers: {
          Authorization: `Bearer ${localData.accessToken}`,
        },
      });
    }
  };
  const ClickFunk = () => {
    const el = document.createElement('textarea');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setIsCopy(true);
  };
  return (
    <Sticky>
      <Wrapper>
        <Flex>
          {/* {isBookmark ? (
            <Img
              src='/icons/problem/saved.svg'
              alt='temp'
              onClick={clickBookmark}
            />
          ) : (
            )} */}
          <Img
            src='/icons/problem/not-saved.svg'
            alt='temp'
            onClick={clickBookmark}
          />
          <Title className='body3_MD'>저장하기</Title>
        </Flex>
        <Flex>
          <Circle onClick={ClickFunk}>
            <Img
              src='/icons/problem/link.svg'
              alt='temp'
              onClick={clickBookmark}
            />
          </Circle>
          {isCopy ? (
            <Title className='body3_MD'>복사완료!</Title>
          ) : (
            <Title className='body3_MD'>링크복사</Title>
          )}
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
