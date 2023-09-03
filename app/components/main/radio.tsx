import { Link } from '@remix-run/react';
import styled from 'styled-components';

export default function ProblemRadio() {
  return (
    <Wrapper>
      <Setting className='body3_BD' to='/ask'>
        <SettingImg src='/icons/ask.svg' alt='' />
        <SettingFontBody3SB className='body3_SB'>问问题</SettingFontBody3SB>
      </Setting>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-width: 1256px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const Setting = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 6.5px;

  width: 107px;
  height: 45px;

  background-color: ${(prop) => prop.theme.color.primary.blue.blue_500};
  border-radius: 100px;

  &:hover {
    color: white;
  }
`;
const SettingImg = styled.img`
  width: 16px;
`;
const SettingFontBody3SB = styled.div`
  color: ${(prop) => prop.theme.color.basic.white};
`;
