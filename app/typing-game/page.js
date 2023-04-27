"use client"

import MyLetter from "./my-letter";
import {useEffect, useRef, useState} from "react";
import {randomInt} from "next/dist/shared/lib/bloom-filter/utils";

// 1. letter from top to bottom with an interval
// 2. get screen height
// 3. clear interval

export default function Game() {

  let [letters, setLetters] = useState([])
  let lettersInterval = useRef(0)
  let divRef = useRef()

  let width = innerWidth

  useEffect(() => {
    lettersInterval.current = setInterval(() => {
      setLetters(chars => {
        return [...chars, generateLetter()]
      })
    }, 1000)
    console.log("interval: ", lettersInterval.current)
    divRef.current.focus()
  }, [])

  useEffect(()=>{
    if (letters.length >= 10) {
      clearInterval(lettersInterval.current)
    }
  }, [letters])

  let clearLetter = (event) => {
    console.log('key down')
    let index = letters.findIndex(item => item.val === event.key)
    if(index > -1) {
      letters.splice(index, 1)
      setLetters([...letters])
    }
  }

  return <div ref={divRef} onKeyDown={clearLetter} tabIndex={0}>
    {letters.map((item, index) => <MyLetter key={index} {...item}/>)}
  </div>
}

function generateLetter() {
  return {
    val: String.fromCharCode(0x41 + Math.floor(Math.random() * 26)),
    speed: 100,
    jump: 10,
    position: Math.floor(Math.random() * (innerWidth - 100))
  }
}