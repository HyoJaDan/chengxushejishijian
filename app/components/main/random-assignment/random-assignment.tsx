import * as _ from 'lodash';
import type { FC } from 'react';
import styled from 'styled-components';
import { useHotSubmits } from '~/hooks/main/use-hot-submits';
import { useRandomAssignment } from '~/hooks/main/use-random-assignment';
import { TwoColumnPreviewCard } from '../preview-card';
import { PreviewSection } from '../preview-section';

export const RandomAssignments: FC = () => {
  const assignment = useRandomAssignment();
  const submits = useHotSubmits();
  const submitList = _.shuffle(
    submits?.map((hotSubmit) => (
      <TwoColumnPreviewCard
        key={`hot-submit-preview-${hotSubmit.id}`}
        numComments={hotSubmit.numComments}
        numLikes={hotSubmit.numLikes}
        previewUrl={hotSubmit.previewUrl}
        userId={hotSubmit.userId}
      />
    ))
  );

  const sectionHeader = (
    <SectionHeader>
      <Info>
        <CategoryChip>{assignment?.category.name}</CategoryChip>
        <Title>{assignment?.title}</Title>
        <Author>by {assignment?.author}</Author>
      </Info>
    </SectionHeader>
  );

  return (
    <PreviewSection title='🤩 과제 톺아보기' leadingContent={sectionHeader}>
      {submitList}
    </PreviewSection>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SectionHeader = styled(Row)`
  height: 32px;
  justify-content: space-between;
`;

const Info = styled(Row)`
  gap: 8px;
`;

const CategoryChip = styled.div`
  padding: 6px 8px;
  border-radius: 4px;
  background-color: #f2713b;
  color: white;
`;

const Title = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
  line-height: 100%;
  color: #1f1f1f;
`;

const Author = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
  line-height: 100%;
  color: rgba(31, 31, 31, 0.8);
`;

const Meta = styled(Row)`
  gap: 24px;
`;

const Attendance = styled(Row)`
  gap: 8px;
`;

const Icons = styled(Row)`
  gap: 8px;
`;
