/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import axios from 'axios';
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
  const localData = useRecoilValue(localStorageData);
  const clickBookmark = () => {
    if (isLike) {
      console.log(isLike, localData);
      axios.delete(`${lessonAddress}/${id}/likes`, {
        headers: {
          Authorization: `Bearer ${localData.accessToken}`,
        },
      });
    }
    console.log(isLike, localData);
    axios.post(`${lessonAddress}/${id}/likes`, {
      headers: {
        Authorization: `Bearer ${localData.accessToken}`,
      },
    });
  };
  return (
    <Sticky>
      <Wrapper>
        <Flex>
          {isBookmark ? (
            <Img
              src='/icons/problem/saved.svg'
              alt='temp'
              onClick={clickBookmark}
            />
          ) : (
            <Img
              src='/icons/problem/not-saved.svg'
              alt='temp'
              onClick={clickBookmark}
            />
          )}
          <Title className='body3_MD'>북마크</Title>
        </Flex>
        <Flex>
          <Circle />
          <Title className='body3_MD'>좋아요</Title>
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
  z-index: 50;
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
`;
const Title = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_600};
`;
const Img = styled.img`
  cursor: pointer;
`;
