import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getUserData } from '~/data/user/user-data';

export default function IntroductionAndLink() {
  const user = useRecoilValue(getUserData);
  if (user !== false)
    return (
      <Wrapper>
        <Wrap>
          <Title className='body1_BD'>소개</Title>
          <DefaultFont className='body3_MD' defaultValue={user.introduce} />
        </Wrap>
        <Line />
        <Wrap>
          <Title className='body1_BD'>링크</Title>
        </Wrap>
      </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 936px;
  height: 500px;
  border: 1px solid #efedea;
  background: ${(prop) => prop.theme.color.basic.white};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  padding: 32px;
`;
const Wrap = styled.div`
  min-height: 164px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Line = styled.div`
  border: 1px solid ${(prop) => prop.theme.color.grayScale.gray_300};
  margin: 32px 0;
`;
const DefaultFont = styled.textarea`
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
  height: 112px;
  outline: none;
  border: none;
  resize: none;
`;

const Title = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;
