// feature #4(next): "use client" to render in browser
"use client"
import {useEffect, useState} from "react";

// feature #5(next): export default is mandatory, without that page will not render
export default function LifeCycleDemo() {

  // feature #1(--react): state
  let [count1, setCount1] = useState(0)
  let [count2, setCount2] = useState(0)

  // feature #2(--react): lifecycle
  // ------on component mount/update
  useEffect(() => {
    console.log("mount 1")
    return () => console.log("unmount 1")
  })

  // ------on component mount
  useEffect(() => {
    console.log("mount 2")
    return () => console.log("unmount 2")
  }, [])

  // ------on component update for count1
  useEffect(() => {
    console.log("mount 3")
    return () => console.log("unmount 3")
  }, [count1])

  // ------on component update for count2
  useEffect(() => {
    console.log("mount 4")
    return () => console.log("unmount 4")
  }, [count2])

  return <>
    <h1>Life Cycle</h1>
    <h2>
      Counter 1: {count1}
      <button onClick={() => setCount1(count1 + 1)}><h1>+</h1></button>
      <button onClick={() => setCount1(count1 - 1)}><h1>-</h1></button>
    </h2>
    <h2>
      Counter 2: {count2}
      <button onClick={() => setCount2(count2 + 1)}><h1>+</h1></button>
      <button onClick={() => setCount2(count2 - 1)}><h1>-</h1></button>
    </h2>
  </>
}
