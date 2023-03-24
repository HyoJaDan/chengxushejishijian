import * as _ from 'lodash';
import type { FC } from 'react';
import { useHotSubmits } from '~/hooks/unused/use-hot-submits';
import { useRandomAssignment } from '~/hooks/unused/use-random-assignment';
import { TwoColumnPreviewCard } from '../preview-card';
import { PreviewSection } from '../preview-section';
import { RandomAssignmentSectionHeader } from './section-header';

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

  return (
    <PreviewSection
      title='🤩 과제 톺아보기'
      leadingContent={
        assignment !== undefined ? (
          <RandomAssignmentSectionHeader assignment={assignment} />
        ) : undefined
      }
    >
      {submitList}
    </PreviewSection>
  );
};
