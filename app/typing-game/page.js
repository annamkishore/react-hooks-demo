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
    if (letters.filter(item=>item.display).length >= 10) {
      clearInterval(lettersInterval.current)
    }
  }, [letters])

  let clearLetter = (event) => {
    console.log('key down')
    let index = letters.findIndex(item => item.val === event.key && item.display)
    if(index > -1) {
      letters[index].display = false
      setLetters([...letters])
    }
  }

  return <div style={{width: "100%", height: "100%"}} ref={divRef} onKeyDown={clearLetter} tabIndex={0} onClick={()=>console.log("clicked")}>
    {letters.map((item, index) => item.display && <MyLetter key={index} {...item}/>)}
  </div>
}

function generateLetter() {
  return {
    val: String.fromCharCode(0x41 + Math.floor(Math.random() * 26)),
    position: Math.floor(Math.random() * (innerWidth - 100)),
    speed: 100,
    jump: 10,
    display: true
  }
}