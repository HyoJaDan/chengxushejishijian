import styled from 'styled-components';

export const RightButton = styled.div<{ endIndex: boolean; top: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 8px;
  background-color: ${(props) => props.theme.color.basic.white};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  border-radius: 100px;
  cursor: pointer;
  width: 48px;
  height: 48px;
  position: absolute;
  top: ${(prop) => `${prop.top}px`};
  right: -22px;
  z-index: 1;
  ${({ endIndex }) => endIndex && 'display:none'}
`;
export const LeftButton = styled.div<{ startIndex: boolean; top: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 8px;
  background-color: ${(props) => props.theme.color.basic.white};
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_200};
  border-radius: 100px;
  cursor: pointer;
  width: 48px;
  height: 48px;
  position: absolute;
  top: ${(prop) => `${prop.top}px`};
  left: -22px;
  z-index: 2;
  /* ${({ startIndex }) => startIndex && 'display:none'} */
`;
