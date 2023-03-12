import styled from 'styled-components';
import type { FCClass } from '~/components/common/types/function-component';

type PreviewCardProps = {
  previewUrl: string;
  userId: number;
  numComments: number;
  numLikes: number;
};
export const PreviewCard: FCClass<PreviewCardProps> = ({
  previewUrl,
  userId,
  numComments,
  numLikes,
  className,
}) => (
  <Wrapper className={className}>
    <PreviewImage src={previewUrl} />
    <PreviewInfo className='body3_MD'>
      <UserWrapper>{userId} user</UserWrapper>
      <MetaWrapper>
        <MetaItem>
          <MetaIcon src='/icons/comment.svg' />
          {numComments}
        </MetaItem>
        <MetaItem>
          <MetaIcon src='/icons/likes.svg' />
          {numLikes}
        </MetaItem>
      </MetaWrapper>
    </PreviewInfo>
  </Wrapper>
);

export const TwoColumnPreviewCard = styled(PreviewCard)`
  grid-column: span 2;
`;

const Wrapper = styled.article.attrs({
  role: 'button',
})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PreviewImage = styled.img`
  display: block;
  aspect-ratio: 296 / 216;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const PreviewInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #1f1f1f;
`;

const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const UserWrapper = styled(RowFlex)``;
const MetaWrapper = styled(RowFlex)``;
const MetaItem = styled(RowFlex)`
  gap: 4px;
`;
const MetaIcon = styled.img`
  width: 24px;
  height: 24px;
`;
