import { Training } from '../main';
import { LessonDetail } from '../main/detail';
import Chart from '../myPage/profile/chart/chart.client';
import IntroductionAndLink from '../myPage/profile/main-content/introductionAndLink';
import UserInformation from '../myPage/profile/main-content/UserInformation';
import Statistics from '../myPage/profile/statistics';
import SSRSafeSuspense from './temp';

interface IPageName {
  pageName: string;
}
export default function Suspenses({ pageName }: IPageName) {
  if (pageName === 'Training') {
    return (
      <SSRSafeSuspense>
        <Training />
      </SSRSafeSuspense>
    );
  }
  if (pageName === 'Detail')
    return (
      <SSRSafeSuspense>
        <LessonDetail />
      </SSRSafeSuspense>
    );
  if (pageName === 'UserInformation') {
    return (
      <SSRSafeSuspense>
        <UserInformation />
      </SSRSafeSuspense>
    );
  }
  if (pageName === 'IntroductionAndLink') {
    return (
      <SSRSafeSuspense>
        <IntroductionAndLink />
      </SSRSafeSuspense>
    );
  }
  if (pageName === 'Chart') {
    return (
      <SSRSafeSuspense>
        <Chart />
      </SSRSafeSuspense>
    );
  }
  if (pageName === 'Statistics') {
    return (
      <SSRSafeSuspense>
        <Statistics />
      </SSRSafeSuspense>
    );
  }
  return (
    <SSRSafeSuspense>
      <Training />;
    </SSRSafeSuspense>
  );
}
