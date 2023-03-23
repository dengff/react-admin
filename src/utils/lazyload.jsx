import {Suspense} from 'react';
import Loading from '@/components/Loading';

export function lazyLoad(Comp) {
  return (
    <Suspense
      fallback={<Loading/>}
    >
      <Comp/>
    </Suspense>
  );
}