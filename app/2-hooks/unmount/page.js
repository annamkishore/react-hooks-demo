"use client"

import {useEffect, useState} from "react";

let count=0
function LifecycleDemo() {

  useEffect(() => {
    // This gets called after every render
    console.log("render!");

    return () => console.log("unmounting...");
  });

  return `I'm a lifecycle demo${count++}`;
}

export default function App() {

  const [random, setRandom] = useState(Math.random());
  const [mounted, setMounted] = useState(true);

  const reRender = () => setRandom(Math.random());
  const toggle = () => setMounted(!mounted);

  return (
    <>
      <button onClick={reRender}>Re-render</button>
      <button onClick={toggle}>Show/Hide LifecycleDemo</button>
      <div>{<LifecycleDemo/>}</div>
    </>
  );
}
