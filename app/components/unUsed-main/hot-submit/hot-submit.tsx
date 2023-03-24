import type { FC } from 'react';
import { useHotSubmits } from '~/hooks/unused/use-hot-submits';
import { TwoColumnPreviewCard } from '../preview-card';
import { PreviewSection } from '../preview-section';

export const HotSubmit: FC = () => {
  const hotSubmitsData = useHotSubmits();
  const hotSubmitList = hotSubmitsData?.map((hotSubmit) => (
    <TwoColumnPreviewCard
      key={`hot-submit-preview-${hotSubmit.id}`}
      numComments={hotSubmit.numComments}
      numLikes={hotSubmit.numLikes}
      previewUrl={hotSubmit.previewUrl}
      userId={hotSubmit.userId}
    />
  ));

  return (
    <PreviewSection title='🔥 인기 과제물'>{hotSubmitList}</PreviewSection>
  );
};
