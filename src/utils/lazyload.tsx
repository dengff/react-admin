import {Suspense} from "react";
import Loading from "@/components/Loading";
import React from "react";
import type {LazyExoticComponent} from "react";

export function lazyLoad(Comp: LazyExoticComponent<any>) {
  return (
    <Suspense fallback={<Loading/>}>
      <Comp/>
    </Suspense>
  );
}