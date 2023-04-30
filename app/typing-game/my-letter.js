"use client"
import {useEffect, useRef, useState} from 'react'

let count = 0
export default function MyLetter({val, col = 100, row = 0, speed = 100, jump = 10, id, updateMissFn}) {
  let [left, setLeft] = useState(col)
  let [top, setTop] = useState(row)
  let interval = useRef(0)

  let lastLine = innerHeight - 100

  useEffect(() => {
    interval.current = setInterval(() => {
      setTop(prevTop => prevTop + jump)
    }, speed)
  }, [])

  useEffect(() => {
    if(top > lastLine) {
      clearInterval(interval.current)
      updateMissFn(id)
    }
  }, [top])

  return <>
    <span style={{position: "fixed", left, top}}><h1>{val}</h1></span>
  </>
}
