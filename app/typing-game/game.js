"use client"

import {useEffect, useReducer, useRef, useState} from "react";

import MyLetter from "./my-letter";
import {useForceUpdate, useGameTimer} from "./game-hooks";
import {gameReducer} from "./game-reducer";

/**
 * Game Component
 */
export default function Game() {
  const [state, dispatch] = useReducer(gameReducer, {letters: []})
  const [generatingSpeed, setGeneratingSpeed] = useState(1000)

  const [seconds, paused, startTime, pauseTime] = useGameTimer()
  const forceUpdate = useForceUpdate()

  const divRef = useRef()
  const gameObj = useRef({generatingIntervalRef: 0})

  // callback, to be called from Child Component
  const updateMiss = id => {
    dispatch({type: "missed", data: id})
  }

  // One time - onMount
  useEffect(() => {
    document.title = 'Typing Game'
    divRef.current.focus()
  }, [])

  // on Generating speed change
  useEffect(()=>{
    clearInterval(gameObj.current.generatingIntervalRef)
    gameObj.current.generatingIntervalRef = setInterval(() => dispatch({type: "add-letter"}), generatingSpeed)
  }, [generatingSpeed])

  let checkAndClearLetter = (event) => {
    switch (true) {
      case paused:
        if(event.code !== 'Space') {
          return
        }
        startTime()
        gameObj.current.generatingIntervalRef = setInterval(() => dispatch({type: "add-letter"}), generatingSpeed)
        forceUpdate()
        break
      case event.code === 'Space': // pause
        pauseTime()
        clearInterval(gameObj.current.generatingIntervalRef)
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
        dispatch({type: "hit", data: event.key.toLowerCase()})
        forceUpdate()
        break;
    }
  }

  return <div>
    <div style={{width: "100%", height: "100vh"}} ref={divRef} onKeyDown={checkAndClearLetter} tabIndex={0}>
      {state.letters.map((item, index) => item.display &&
        <MyLetter key={index}
                  {...item}
                  paused={paused}
                  updateMissFn={updateMiss}/>
      )}
    </div>
    <Stats
      hits={state.letters.filter(item => item.hit).length}
      miss={state.letters.filter(item => item.miss).length}
      time={seconds}
      speed={11 - ((generatingSpeed-300) / 70)}
    />
  </div>
}

/**
 * Stats Component
 */

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
