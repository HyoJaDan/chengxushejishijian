/* eslint-disable react/jsx-no-useless-fragment */
import type { ComponentProps } from 'react';
import { Suspense, useEffect, useState } from 'react';
// type ErrorBoundaryProps = ComponentProps<typeof RemixErrorBoundary>;
function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

export default function SSRSafeSuspense(
  props: ComponentProps<typeof Suspense>
) {
  const isMounted = useMounted();

  if (isMounted) {
    return <Suspense {...props} />;
  }
  /* return <>{props.fallback}</>; */
  // eslint-disable-next-line react/destructuring-assignment
  return <>{props.fallback}</>;
}

// interface Props extends Omit<ErrorBoundaryProps, 'renderFallback'> {
//   pendingFallback: ComponentProps<typeof SSRSafeSuspense>['fallback'];
//   rejectedFallback: ErrorBoundaryProps['renderFallback'];
// }

// function AsyncBoundary({
//   pendingFallback,
//   rejectedFallback,
//   children,
//   ...errorBoundaryProps,
// }: Props) {
//   return (
//     <ErrorBoundary
//       renderFallback={rejectedFallback}
//       {...errorBoundaryProps}
//     >
//       <SSRSafeSuspense fallback={pendingFallback}>
//         {children} {/* <- fulfilled */}
//       </SSRSafeSuspense>
//     </ErrorBoundary>
//   );
// });
