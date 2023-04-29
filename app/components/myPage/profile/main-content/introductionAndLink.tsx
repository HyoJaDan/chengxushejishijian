import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getURLImage } from '~/data/user/url-image';
import { getUserData } from '~/data/user/user-data';
import type { IUserData } from '~/models/user/user';

export default function IntroductionAndLink() {
  const user: IUserData = useRecoilValue(getUserData);
  const URLImages = useRecoilValue(getURLImage);

  const { memberSocialLinkMappings } = user;
  const outputLinks = memberSocialLinkMappings.map(
    ({ id, memberSocialLinkId, url }, index) => {
      const idx = `${id}_${index}`;
      return (
        <Box key={idx}>
          <Image src={URLImages[memberSocialLinkId - 1].iconUrl} alt='icon' />
          <Border />
          <Link href={url}>{url}</Link>
        </Box>
      );
    }
  );
  return (
    <Wrapper>
      <Wrap>
        <Title className='body1_BD'>소개</Title>
        <PreWrap className='body3_MD'>{user.introduce}</PreWrap>
      </Wrap>
      <Line />
      <LinkWrap>
        <Title className='body1_BD'>링크</Title>
        <LinkWrapper className='caption1_SB'>{outputLinks}</LinkWrapper>
      </LinkWrap>
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
  min-height: 180px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const LinkWrap = styled(Wrap)`
  min-height: 140px;
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
const PreWrap = styled.div`
  white-space: pre-wrap;
`;
const Title = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;

  width: fit-content;
  height: 36px;

  background: #ffffff;
  /* grayscale/300 */

  border: 1px solid #dddad7;
  border-radius: 8px;
`;
const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Image = styled.img``;
const Link = styled.a`
  color: ${(prop) => prop.theme.color.primary.blue.blue_600};
`;
const Border = styled.div`
  background: #d9d9d9;
  width: 1px;
  height: 20px;
`;
