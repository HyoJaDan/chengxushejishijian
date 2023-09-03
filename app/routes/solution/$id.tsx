import { SolutionMain } from '~/components/solutioin/solution-detail';
import { SolutionFallBack } from '~/components/solutioin/solution-detail/soiution-fallback';
import SSRSafeSuspense from '../../hooks/ssr-safe-suspense';

export default function SolutionDefault() {
  return (
    <div>
      <SSRSafeSuspense fallback={SolutionFallBack()}>
        <SolutionMain />
      </SSRSafeSuspense>
    </div>
  );
}
