/* eslint-disable react/jsx-no-useless-fragment */
import type { ComponentProps } from 'react';
import { Suspense, useEffect, useState } from 'react';

function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

export default function useSSRSafeSuspense(
  props: ComponentProps<typeof Suspense>
) {
  const isMounted = useMounted();

  if (isMounted) {
    return <Suspense {...props} />;
  }
  // eslint-disable-next-line react/destructuring-assignment
  return <>{props.fallback}</>;
}
