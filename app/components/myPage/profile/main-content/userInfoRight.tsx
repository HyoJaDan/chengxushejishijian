import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userData } from '~/recoils/user/user-data';
import OutputTags from '../outputTags';

export default function UserInfoRight() {
  const data = useRecoilValue(userData);
  return (
    <Wrapper>
      <Introduction>
        <Title>소개</Title>
        <DefaultFont>{data.introduce}</DefaultFont>
      </Introduction>
      <Information>
        <Title>정보</Title>
        <Tag>
          <OutputTags name='스킬' tag='skill' />
          <OutputTags name='관심분야' tag='interest' />
          <OutputTags name='추천태그' tag='tag' />
        </Tag>
      </Information>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: -webkit-fill-available;
  flex-grow: 5;
`;
const Introduction = styled.div`
  flex-basis: 50%;
  border-bottom: 1px solid #efedea;
  padding: 24px;
`;
const Information = styled.div`
  flex-basis: 50%;
  padding: 24px;
`;
const DefaultFont = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #31302f;
`;

const Title = styled(DefaultFont)`
  font-size: 16px;
  color: #484746;
  margin-bottom: 8px;
`;
const Tag = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 33px;
`;
