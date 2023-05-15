import {useEffect, useRef, useState} from "react";

/**
 * Game Timer Hook
 */
export function useGameTimer() {
  const [seconds, setSeconds] = useState(0)
  const timeRef = useRef({
    startTime: Date.now(),  // initial game start time
    pauseTime: null,        // whenever paused
    totalPauseTime: 0,
    timerRef: 0,

    paused: false
  })

  useEffect(()=>{
    startTime()
  }, [])

  const startTime = () => {
    timeRef.current.paused = false
    timeRef.current.totalPauseTime += timeRef.current.pauseTime ? Math.trunc((Date.now() - timeRef.current.pauseTime) / 1000) : 0

    timeRef.current.timerRef = setInterval(() => {
      let durationSeconds = Math.trunc((Date.now() - timeRef.current.startTime) / 1000) - timeRef.current.totalPauseTime
      setSeconds(() => durationSeconds)
    }, 1000)
  }
  const pauseTime = () => {
    timeRef.current.paused = true
    clearInterval(timeRef.current.timerRef)
    timeRef.current.pauseTime = Date.now()
  }

  return [seconds, timeRef.current.paused, startTime, pauseTime]
}

/**
 * Force Update Hook
 */
export function useForceUpdate(){
  const [value, setValue] = useState(0);
  return () => setValue(value => value + 1);
}
