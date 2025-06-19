import {Suspense} from "react";
import dynamic from "next/dynamic";

import LazyData from "./LazyData";

const LazyHelloComponent = dynamic(
  () => import("./LazyHelloComp"),
  {
    ssr: false,
    loading: () => <>Loading Component..</>
  }
);

// demo for below
// async data
// async code

export default function SuspensePage() {
  return (
    <>
      <div>Suspense Demo</div>

      {/* Server-rendered async data */}
      <Suspense fallback={<p>Loading User Data... (wait 1 sec)</p>}>
        Async Data
        <LazyData/>
      </Suspense>

      {/* Client-rendered, code-split component */}
      <LazyHelloComponent />

      {/* Async Code (or) Code Splitting, needed if react lazy  */}
      {/*<Suspense fallback={<>Loading React Component...(wait 2 secs)</>}>*/}
      {/*  Async Code..*/}
      {/*  <LazyHelloComponent/>*/}
      {/*</Suspense>*/}
    </>
  )
}
