"use client"

import MyLetter from "./my-letter";
import {useEffect, useRef, useState} from "react";

export default function Game() {
  let [letters, setLetters] = useState([])
  const [seconds, setSeconds] = useState(0)
  let [generatingSpeed, setGeneratingSpeed] = useState(1000)

  let divRef = useRef()

  let gameObj = useRef({
    startTime: Date.now(),
    gameTimer: 0,
    paused: false,
    pauseTime: 0,
    totalPauseTime: 0,
    generatingIntervalRef: 0
  })

  // callback, to be called from Child Component
  const updateMiss = id => {
    letters.find(item => item.id === id).miss = true
    setLetters([...letters])
  }

  let startAndGetGameTimer = () => setInterval(() => {
    let durationSeconds = Math.trunc((Date.now() - gameObj.current.startTime) / 1000) - gameObj.current.totalPauseTime
    setSeconds(() => durationSeconds)
  }, 1000)

  // One time - onMount
  useEffect(() => {
    document.title = 'Typing Game'

    // start timer
    gameObj.current.gameTimer = startAndGetGameTimer()

    divRef.current.focus()
  }, [])

  useEffect(()=>{
    clearInterval(gameObj.current.generatingIntervalRef)
    gameObj.current.generatingIntervalRef = setInterval(() => setLetters(chars => [...chars, generateLetter()]), generatingSpeed)
  }, [generatingSpeed])

  let checkAndClearLetter = (event) => {
    switch (true) {
      case event.code === 'Space': // pause
        // done: pause timer
        // done: pause falling letters
        // done: pause generating letters
        if(gameObj.current.paused) {
          gameObj.current.gameTimer = startAndGetGameTimer()
          gameObj.current.paused = false
          gameObj.current.pauseTime = Math.trunc((Date.now() - gameObj.current.pauseTime)/1000)
          gameObj.current.totalPauseTime += gameObj.current.pauseTime
          gameObj.current.generatingIntervalRef = setInterval(() => setLetters(chars => [...chars, generateLetter()]), generatingSpeed)
        } else {
          clearInterval(gameObj.current.gameTimer)
          clearInterval(gameObj.current.generatingIntervalRef)
          gameObj.current.paused = true
          gameObj.current.pauseTime = Date.now()
        }
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
    <div style={{width: "100%", height: "100vh"}} ref={divRef} onKeyDown={checkAndClearLetter} tabIndex={0}>
      {letters.map((item, index) => item.display &&
        <MyLetter key={index}
                  {...item}
                  paused={gameObj.current.paused}
                  updateMissFn={updateMiss}/>
      )}
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
