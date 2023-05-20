import SSRSafeSuspense from '../../hooks/ssr-safe-suspense';
import { Training } from '../main';

interface IPageName {
  pageName: string;
}
export default function Suspenses({ pageName }: IPageName) {
  return (
    <SSRSafeSuspense>
      <Training />
    </SSRSafeSuspense>
  );
}
