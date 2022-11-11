import type { FC } from 'react';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { submitServiceProvider } from '~/recoils/main/submit-service';
import { TwoColumnPreviewCard } from '../preview-card';
import { PreviewSection } from '../preview-section';

export const HotSubmit: FC = () => {
  const service = useRecoilValue(submitServiceProvider);
  const hotSubmitsData = useQuery('hotSubmits', service.getHotSubmits);
  let hotSubmitList = null;
  if (hotSubmitsData.isSuccess) {
    hotSubmitList = hotSubmitsData.data.map((hotSubmit) => (
      <TwoColumnPreviewCard
        key={`hot-submit-preview-${hotSubmit.id}`}
        numComments={hotSubmit.numComments}
        numLikes={hotSubmit.numLikes}
        previewUrl={hotSubmit.previewUrl}
        userId={hotSubmit.userId}
      />
    ));
  }

  return (
    <PreviewSection title='🔥 인기 과제물'>{hotSubmitList}</PreviewSection>
  );
};
