import { Suspense } from 'react';
import { Training } from '../main';
import { LessonDetail } from '../main/detail';

interface IPageName {
  pageName: string;
}
export default function Suspenses({ pageName }: IPageName) {
  if (pageName === 'Training') {
    return (
      <Suspense>
        <Training />
      </Suspense>
    );
  }
  if (pageName === 'Detail')
    return (
      <Suspense>
        <LessonDetail />
      </Suspense>
    );
  return (
    <Suspense>
      <Training />;
    </Suspense>
  );
}
