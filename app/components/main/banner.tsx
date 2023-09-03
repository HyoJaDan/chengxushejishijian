import type { FC, HTMLProps } from 'react';
import styled from 'styled-components';

export const Banner: FC<HTMLProps<HTMLElement>> = ({ className }) => {
  return (
    <Overlay>
      <Wrapper>
        <div className='title2_BD'>平时学习的时候有很多不懂的地方吗？</div>
        <div className='title2_BD'>你需要的地方就是这里！</div>
        <div style={{ marginTop: '15px' }} className='body2_BD'>
          提问并回答不懂地问题
        </div>
        <div className='body2_BD'>和其他用户一起成长吧！</div>
      </Wrapper>
    </Overlay>
  );
};

const Overlay = styled.div`
  max-width: 1256px;
  margin: 40px auto;
`;
const Wrapper = styled.div`
  max-width: 1256px;
  margin: 40px auto;
  height: 272px;
  background-color: ${(prop) => prop.theme.color.grayScale.gray_300};
  border: 1px solid #efedea;
  border-radius: 8px;
  padding: 52px 72px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
  gap: 4px;
  width: fit-content;
  height: 35px;
  background: white;
  border-radius: 4px;
  color: black;
`;
