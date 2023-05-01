"use client"

import MyLetter from "./my-letter";
import {useEffect, useRef, useState} from "react";

// 1. letter from top to bottom with an interval
// 2. get screen height
// 3. clear interval

/**
 *
 * issues
 *  1, Hits increasing for missed letters
 *  2, Gameover to have box
 *  3, stop falling letters after gameover (use reducer)
 */

export default function Game() {

  // todo: pack ref variables for more clarity

  let [letters, setLetters] = useState([])
  let [missCount, setMissCount] = useState(0)
  let divRef = useRef()
  const startTime = useRef(new Date())
  const [seconds, setSeconds] = useState(0)
  const gameTimer = useRef(0)

  let generatingIntervalRef = useRef(0)
  let [generatingSpeed, setGeneratingSpeed] = useState(1000)

  // callback, to be called from Child Component
  const updateMiss = id => {
    letters.find(item => item.id === id).miss = true
    setLetters([...letters])
  }
  // const updateMissCount = id => setMissCount(missCount + count)

  // useEffect(() => {
  //   if (missCount > 10) {
  //     alert("Game Over")
  //     clearInterval(lettersInterval.current)
  //     clearInterval(gameTimer.current)
  //   }
  // }, [missCount])

  // useEffect(() => {
  //   if (letters.filter(item => item.display).length >= 10) {
  //     clearInterval(lettersInterval.current)
  //   }
  // }, [letters])

  // One time - onMount
  useEffect(() => {
    document.title = 'Typing Game'

    // start timer
    gameTimer.current = setInterval(() => {
      let tempSeconds = Math.trunc((new Date() - startTime.current) / 1000)
      setSeconds(() => tempSeconds)
    }, 1000)

    divRef.current.focus()
  }, [])

  useEffect(()=>{
    clearInterval(generatingIntervalRef.current)
    generatingIntervalRef.current = setInterval(() => setLetters(chars => [...chars, generateLetter()]), generatingSpeed)
  }, [generatingSpeed])

  let checkAndClearLetter = (event) => {
    switch (true) {
      case event.code === 'Space': // pause
        // todo: pause timer
        // todo: pause falling letters
        // clearInterval(generatingIntervalRef.current)
        break
      case event.key === 'ArrowUp':
        if(generatingSpeed === 100) {
          return
        }
        setGeneratingSpeed(generatingSpeed - 100)
        break
      case event.key === 'ArrowDown':
        if(generatingSpeed === 1000) {
          return
        }
        setGeneratingSpeed(generatingSpeed + 100)
        break
      case event.key === 'Escape':
        break;
      case event.key === 'Enter':
        break;
      case event.key.match(/[a-zA-Z]/) != null:
        let index = letters.findIndex(item => item.val.toLowerCase() === event.key.toLowerCase() && item.display && !item.miss)
        if (index > -1) {
          letters[index].display = false
          letters[index].hit = true
          setLetters([...letters])
        }
        break;
    }
  }

  return <div>
    <div style={{width: "100%", height: "100%"}} ref={divRef} onKeyDown={checkAndClearLetter} tabIndex={0}
         onClick={() => console.log("clicked")}>
      {letters.map((item, index) => item.display && <MyLetter key={index} {...item} updateMissFn={updateMiss}/>)}
    </div>
    <span style={{position: "absolute", right: 50, top: 10, fontFamily: "courier"}}>
      <div>Hits: {letters.filter(item => item.hit).length}</div>
      <div>Miss: {letters.filter(item => item.miss).length}</div>
      <div>Time: {seconds}</div>
      <div>Speed: {11 - (generatingSpeed / 100)}</div>
    </span>
  </div>
}

let random = max => Math.floor(Math.random() * max)

let sequenceId = 1

function generateLetter() {
  return {
    id: sequenceId++,
    val: String.fromCharCode(0x41 + random(26)),  // letter
    row: 0,
    col: random(innerWidth - 50),

    speed: 100 + random(100),
    jump: 10,
    display: true
  }
}
