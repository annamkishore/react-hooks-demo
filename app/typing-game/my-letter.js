"use client"

import {useEffect, useRef, useState} from 'react'

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
