import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getUserData } from '~/recoils/user/user-data';
import OutputTags from '../outputTags';

export default function IntroductionAndLink() {
  const user = useRecoilValue(getUserData);

  return (
    <Wrapper>
      <Wrap>
        <Title>소개</Title>
        <DefaultFont>{user.introduce}</DefaultFont>
      </Wrap>
      <Line />
      <Wrap>
        <Title>링크</Title>
        <Tag>
          <OutputTags name='스킬' tag='skill' />
          <OutputTags name='관심분야' tag='interest' />
          <OutputTags name='추천태그' tag='tag' />
        </Tag>
      </Wrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 936px;
  height: 500px;
  border: 1px solid #efedea;
  background: #ffffff;
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
  border: 1px solid #dddad7;
  margin: 32px 0;
`;
const DefaultFont = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #31302f;
`;

const Title = styled(DefaultFont)`
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: #31302f;
`;
const Tag = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 33px;
`;
