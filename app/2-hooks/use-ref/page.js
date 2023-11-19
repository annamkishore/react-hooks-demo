// feature #4(nextjs): "use client" to render in browser
"use client"

import {useEffect, useRef, useState} from "react";

// feature #5(nextjs): export default is mandatory, without that page will not render
export default function LifeCycleDemo() {

  // feature #1(--reactjs): state
  let [count1, setCount1] = useState(0)
  let [count2, setCount2] = useState(0)

  // feature #3(--reactjs): useRef
  let inputRef = useRef()             // referencing an element
  let dataRef = useRef(11)    // referencing an object/value (works as class variable (in Function Component))

  // feature #2(--reactjs): lifecycle using useEffect
  // ------on component mount/update
  useEffect(() => {
    dataRef.current += 1
    console.log("mount 1")
    return () => console.log("unmount 1")
  })

  // ------on component mount
  useEffect(() => {
    inputRef.current.focus()
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
    <Greet name={"Krishna.."} />
    <input ref={inputRef} />
    <div>another ref usage, {dataRef.current}</div>
  </>
}

function Greet({name}) {
  return <>
    <h1>Namaste {name}</h1>
  </>
}
