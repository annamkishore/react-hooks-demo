'use client';

import {Suspense, lazy} from "react";

const LazyHello = lazy(() => import("./hello"));

// async data
// async code

async function UserData() {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  await delay(1000); // simulate 1 second network/data delay
  return <div>👤 User</div>;
}

export default function SuspensePage() {
  return (
    <>
      <div>Suspense Demo</div>
      {/* Async Data (or) Data Fetching */}
      <Suspense fallback={<p>Loading User Data...</p>}>
        Async Data
        <UserData />
      </Suspense>

      {/* Async Code (or) Code Splitting */}
      <Suspense fallback={<>Loading...</>}>
        Async Code
        <LazyHello />
      </Suspense>
    </>
  )
}
