"use client"

import {useEffect, useRef, useState} from 'react'

/**
 * MyLetter Component
 */
export default function MyLetter({val, col = 100, row = 0, speed = 100, jump = 10, id, updateMissFn, paused}) {
  const [left, setLeft] = useState(col)
  const [top, setTop] = useState(row)
  const letterObj = useRef({
    fallingInterval: 0
  })

  const lastLine = innerHeight - 100

  useEffect(() => {
    letterObj.current.fallingInterval = setInterval(() => {setTop(prevTop => prevTop + jump)}, speed)
  }, [])

  useEffect(() => {
    if(top > lastLine) {
      clearInterval(letterObj.current.fallingInterval)
      updateMissFn(id)
    }
  }, [top])

  useEffect(()=>{
    clearInterval(letterObj.current.fallingInterval)
    if(!paused){
      letterObj.current.fallingInterval = setInterval(() => {setTop(prevTop => prevTop + jump)}, speed)
    }
  }, [paused])

  return <>
    <span style={{position: "fixed", left, top}}><h1>{val}</h1></span>
  </>
}

/**
 * Stats Component
 */
export function Stats({hits, miss, time, speed}) {
  const pad = (num, count = 4) => String(num).padStart(count, '_')
  return <span style={{position: "absolute", right: 10, top: 10, fontFamily: "courier", opacity: "60%"}}>
      <div>Hits {pad(hits)}</div>
      <div>Miss {miss}/10</div>
      <div>Time {pad(time)}</div>
      <div>Spēd {pad(speed)}</div>
      <br/>
      <div>Space: pause</div>
      <div>&nbsp;&nbsp;↑/↓: speed</div>
    </span>
}
