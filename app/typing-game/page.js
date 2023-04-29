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
  let lettersInterval = useRef(0)
  let divRef = useRef()
  const startTime = useRef(new Date())
  const [seconds, setSeconds] = useState(0)
  const gameTimer = useRef(0)

  // callback, to be called from Child Component
  const updateMissCount = count => setMissCount(missCount + count)
  useEffect(() => {
    if (missCount > 10) {
      alert("Game Over")
      clearInterval(lettersInterval.current)
      clearInterval(gameTimer.current)
    }
  }, [missCount])

  useEffect(() => {
    document.title = 'Typing Game'

    // start timer
    gameTimer.current = setInterval(() => {
      let tempSeconds = Math.trunc((new Date() - startTime.current) / 1000)
      setSeconds(() => tempSeconds)
    }, 1000)

    // generate letter for every 1 second
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
      // clearInterval(lettersInterval.current)
    }
  }, [letters])

  let clearLetter = (event) => {
    switch (true) {
      case event.key === 'Escape':
        break;
      case event.key === 'Enter':
        break;
      case event.key.match(/[a-zA-Z]/) != null:
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
      <div>Hits: {letters.filter(item => item.hit).length}</div>
      <div>Miss: {missCount}/10</div>
      <div>Time: {seconds}</div>
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
