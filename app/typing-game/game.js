"use client"

import {useEffect, useRef, useState} from "react";

import MyLetter from "./my-letter";
import {useForceUpdate, useShowTime} from "./game-hooks";
import generateLetter from "./generate";

export default function Game() {
  const [letters, setLetters] = useState([])
  const [generatingSpeed, setGeneratingSpeed] = useState(1000)
  const [seconds, paused, startTime, pauseTime] = useShowTime()

  const divRef = useRef()
  const gameObj = useRef({
    generatingIntervalRef: 0
  })
  let forceUpdate = useForceUpdate()

  // callback, to be called from Child Component
  const updateMiss = id => {
    letters.find(item => item.id === id).miss = true
    setLetters([...letters])
  }

  // One time - onMount
  useEffect(() => {
    document.title = 'Typing Game'
    divRef.current.focus()
  }, [])

  // on Generate speed change
  useEffect(()=>{
    clearInterval(gameObj.current.generatingIntervalRef)
    gameObj.current.generatingIntervalRef = setInterval(() => setLetters(chars => [...chars, generateLetter()]), generatingSpeed)
  }, [generatingSpeed])

  let checkAndClearLetter = (event) => {
    switch (true) {
      case event.code === 'Space': // pause
        if(paused) {
          startTime()
          gameObj.current.generatingIntervalRef = setInterval(() => setLetters(chars => [...chars, generateLetter()]), generatingSpeed)
        } else {
          pauseTime()
          clearInterval(gameObj.current.generatingIntervalRef)
        }
        forceUpdate()
        break
      case event.key === 'ArrowUp': // speed increase by 70
        if(generatingSpeed <= 400) {
          return
        }
        setGeneratingSpeed(generatingSpeed - 70)
        break
      case event.key === 'ArrowDown': // speed decrease
        if(generatingSpeed >= 1000) {
          return
        }
        setGeneratingSpeed(generatingSpeed + 70)
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
                  paused={paused}
                  updateMissFn={updateMiss}/>
      )}
    </div>
    <Stats
      hits={letters.filter(item => item.hit).length}
      miss={letters.filter(item => item.miss).length}
      time={seconds}
      speed={11 - ((generatingSpeed-300) / 70)}
    />
  </div>
}

function Stats({hits, miss, time, speed}) {
  const pad = (num, count=4)  => String(num).padStart(count, '_')
  return <span style={{position: "absolute", right: 10, top: 10, fontFamily: "courier", opacity: "60%"}}>
      <div>Hits {pad(hits)}</div>
      <div>Miss {pad(miss)}</div>
      <div>Time {pad(time)}</div>
      <div>Spēd {pad(speed)}</div>
      <br/>
      <div>Space: pause</div>
      <div>&nbsp;&nbsp;↑/↓: speed</div>
    </span>
}
