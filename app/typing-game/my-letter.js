"use client"
import {useCallback, useEffect, useRef, useState} from 'react'

let count = 0
export default function MyLetter({val, col = 100, row = 0, speed = 100, jump = 10, id, updateMissFn, paused}) {
  let [left, setLeft] = useState(col)
  let [top, setTop] = useState(row)
  let interval = useRef(0)

  let lastLine = innerHeight - 100

  useEffect(() => {
    interval.current = setInterval(() => {setTop(prevTop => prevTop + jump)}, speed)
  }, [])

  useEffect(() => {
    if(top > lastLine) {
      clearInterval(interval.current)
      updateMissFn(id)
    }
  }, [top])

  useEffect(()=>{
    clearInterval(interval.current)
    if(!paused){
      interval.current = setInterval(() => {setTop(prevTop => prevTop + jump)}, speed)
    }
  }, [paused])

  return <>
    <span style={{position: "fixed", left, top}}><h1>{val}</h1></span>
  </>
}
