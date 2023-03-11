import { Suspense } from 'react';
import { Training } from '../main';
import { LessonDetail } from '../main/detail';
import IntroductionAndLink from '../myPage/profile/main-content/introductionAndLink';
import UserInformation from '../myPage/profile/main-content/UserInformation';

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
  return (
    <Suspense>
      <Training />;
    </Suspense>
  );
}
