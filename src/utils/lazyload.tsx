import {Suspense} from 'react';
import Loading from '@/components/Loading';
import React from 'react';

export function lazyLoad(Comp) {
  return (
    <Suspense fallback={<Loading/>}>
      <Comp/>
    </Suspense>
  );
}