"use client"

import MyLetter from "./my-letter";
import {useEffect, useRef, useState} from "react";

// 1. letter from top to bottom with an interval
// 2. get screen height
// 3. clear interval

export default function Game() {
  let [letters, setLetters] = useState([])
  let [missCount, setMissCount] = useState(0)
  let lettersInterval = useRef(0)
  let divRef = useRef()
  const startTime = useRef(new Date())

  const updateMissCount = (count) => {
    setMissCount(missCount + count)
  }

  useEffect(() => {
    document.title = 'Typing Game'

    lettersInterval.current = setInterval(() => {
      setLetters(chars => {
        return [...chars, generateLetter()]
      })
    }, 1000)
    console.log("interval: ", lettersInterval.current)
    divRef.current.focus()
  }, [])

  useEffect(() => {
    if (letters.filter(item => item.display).length >= 10) {
      clearInterval(lettersInterval.current)
    }
  }, [letters])

  let clearLetter = (event) => {
    switch (true){
      case event.key === 'Escape': break;
      case event.key === 'Enter': break;
      case event.key.match(/[a-zA-Z]/).length > 0:
        let index = letters.findIndex(item => item.val.toLowerCase() === event.key.toLowerCase() && item.display)
        if (index > -1) {
          letters[index].display = false
          letters[index].hit = true
          setLetters([...letters])
        }
        break;
    }
  }

  return <div>
    <div style={{width: "100%", height: "100%"}} ref={divRef} onKeyDown={clearLetter} tabIndex={0}
         onClick={() => console.log("clicked")}>
      {letters.map((item, index) => item.display && <MyLetter key={index} {...item} updateMissFn={updateMissCount}/>)}
    </div>
    <span style={{position: "absolute", right: 100, top: 10}}>
      <div>Hits: {letters.filter(item=>item.hit).length}</div>
      <div>Miss: {missCount}</div>
      <div>Time: {Math.trunc((new Date()-startTime.current)/1000)}</div>
    </span>
  </div>
}

function random(max) {
  return Math.floor(Math.random() * max)
}

function generateLetter() {
  return {
    val: String.fromCharCode(0x41 + random(26)),
    row: 0,
    col: random(innerWidth - 100),
    speed: 100 + random(100),
    jump: 10 + random(10),
    display: true
  }
}
