import { Suspense } from 'react';
import { Training } from '../main';
import { LessonDetail } from '../main/detail';
import Chart from '../myPage/profile/chart/chart.client';
import IntroductionAndLink from '../myPage/profile/main-content/introductionAndLink';
import UserInformation from '../myPage/profile/main-content/UserInformation';
import Statistics from '../myPage/profile/statistics';

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
  if (pageName === 'UserInformation') {
    return (
      <Suspense>
        <UserInformation />
      </Suspense>
    );
  }
  if (pageName === 'IntroductionAndLink') {
    return (
      <Suspense>
        <IntroductionAndLink />
      </Suspense>
    );
  }
  if (pageName === 'Chart') {
    return (
      <Suspense>
        <Chart />
      </Suspense>
    );
  }
  if (pageName === 'Statistics') {
    return (
      <Suspense>
        <Statistics />
      </Suspense>
    );
  }
  return (
    <Suspense>
      <Training />;
    </Suspense>
  );
}
