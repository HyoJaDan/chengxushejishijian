import { useState } from 'react';
import styled from 'styled-components';

export function CopyLink() {
  const [isCopy, setIsCopy] = useState<boolean>(false);
  const clickCopyLink = () => {
    const el = document.createElement('textarea');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setIsCopy(true);
  };
  return (
    <div>
      <Circle onClick={clickCopyLink}>
        <Img src='/icons/problem/link.svg' alt='temp' />
      </Circle>
      {isCopy ? (
        <Title className='body3_MD'>복사완료!</Title>
      ) : (
        <Title className='body3_MD'>링크복사</Title>
      )}
    </div>
  );
}
const Title = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_600};
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
const Img = styled.img`
  cursor: pointer;
`;
