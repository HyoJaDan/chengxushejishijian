import Ask from '~/components/ask';
import SSRSafeSuspense from '~/hooks/ssr-safe-suspense';

export default function AskDefault() {
  return (
    <SSRSafeSuspense>
      <Ask />
    </SSRSafeSuspense>
  );
}
