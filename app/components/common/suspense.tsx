import SSRSafeSuspense from '../../hooks/ssr-safe-suspense';
import { Training } from '../main';

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
  return (
    <SSRSafeSuspense>
      <Training />;
    </SSRSafeSuspense>
  );
}
