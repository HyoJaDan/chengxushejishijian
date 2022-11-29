import styled from 'styled-components';
import { userData2 } from '~/recoils/user-info/atoms';
import { useRecoilValue } from 'recoil';
import OutputTags from './outputTags';

export default function Part3() {
  const data2 = useRecoilValue(userData2);

  return (
    <Wrapper>
      <Title>자기소개</Title>
      {data2.introduce}
      <Title>스킬</Title>
      <OutputTags tag='skills' />
      <Title>관심분야</Title>
      <OutputTags tag='interests' />
      <Title>추천태그</Title>
      <OutputTags tag='tags' />
      <Title>획득한 뱃지</Title>
      <Temp />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 936px;
  height: 329px;
  background: #ffffff;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  align-content: space-between;
  padding: 24px;
`;
export const Title = styled.div`
  line-height: 150%;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #1f1f1f;
`;

const Temp = styled.div`
  width: 77px;
  height: 77px;

  background: #d9d9d9;
  border: 2px solid #d9d9d9;
  border-radius: 38.5px;
`;
