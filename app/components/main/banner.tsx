import type { FC, HTMLProps } from 'react';
import styled from 'styled-components';

export const Banner: FC<HTMLProps<HTMLElement>> = ({ className }) => {
  return (
    <Overlay>
      <Wrapper>
        <div className='title2_BD'>평소 공부하면서 모르는 것이 많았다고요?</div>
        <div className='title2_BD'>당신이 필요한 장소는 바로 이곳입니다!</div>
        <div style={{ marginTop: '15px' }} className='body2_BD'>
          모르는 것을 질문하고 대답하여
        </div>
        <div className='body2_BD'>다른 사용자와 함께 성장하세요!</div>
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
