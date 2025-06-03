"use client"

import {useEffect, useState} from "react";

function LifecycleDemo() {
  let [count, setCount] = useState(0);
  let [msg, setMsg] = useState("Hello");

  // Render always
  useEffect(()   => {
    console.log("Krishna, render always");
    return () => console.log("Krishna, unmount ONE");
  });

  // Render on Mount
  useEffect(() => {
    console.log("Krishna, render on mount");
    setMsg(msg + "\nKrishna, render on mount");
    return () => console.log("Krishna, unmount TWO");
  }, []);

  // Render on count change
  useEffect(() => {
    setMsg(msg + "\nKrishna, render on count change");
    return () => console.log("Krishna, unmount THREE");
  }, [count]);

  return (
    <>
      LifecycleDemo: {count}
      <button onClick={() => setCount(count + 1)}>Count</button>
      <div>{msg}</div>
    </>
  );
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
