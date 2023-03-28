import styled from 'styled-components';
import type { IURLImage } from '~/data/user/url-image';
import type { IURLs } from './url';

interface IOutPutURLImg {
  image: IURLImage[];
  isGood: boolean;
  urls: IURLs[];
  setURLs: Function;
  index: number;
}
export const OutputURLImg = ({
  image,
  isGood,
  urls,
  setURLs,
  index,
}: IOutPutURLImg) => {
  const ImgMap = image.map((value: IURLImage) => {
    const keyId = `${value.id}_${value.name}`;

    return (
      <Img
        key={keyId}
        src={value.iconUrl}
        alt='icon'
        onClick={() => {
          // eslint-disable-next-line no-param-reassign
          urls[index] = { isTrue: true, nowURLImage: value };
          setURLs(urls);
        }}
      />
    );
  });
  return <Wrapper isGood={isGood}>{ImgMap}</Wrapper>;
};
const Wrapper = styled.div<{ isGood: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  top: 48px;
  position: absolute;
  z-index: 1;
  width: 122px;
  height: 84px;

  background: ${(prop) => prop.theme.color.grayScale.gray_100};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;

  ${({ isGood }) => isGood && `display:none`}
`;

const Img = styled.img`
  cursor: pointer;
`;
