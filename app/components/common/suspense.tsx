import SSRSafeSuspense from '../../hooks/ssr-safe-suspense';
import { Training } from '../main';
import { Solution } from '../main/solutions';

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
  if (pageName === 'Solution') {
    return (
      <SSRSafeSuspense>
        <Solution />
      </SSRSafeSuspense>
    );
  }
  return (
    <SSRSafeSuspense>
      <Training />;
    </SSRSafeSuspense>
  );
}
