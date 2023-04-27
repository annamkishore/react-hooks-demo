"use client"
import {useEffect, useRef, useState} from 'react'

let count = 0
export default function MyLetter({val, position = 100, speed = 100, jump = 10}) {
  let [left, setLeft] = useState(position)
  let [top, setTop] = useState(0)
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
    }
  }, [top])

  return <>
    <span style={{position: "fixed", left, top}}><h1>{val}</h1></span>
  </>
}
