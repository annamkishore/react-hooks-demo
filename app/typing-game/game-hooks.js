import {useEffect, useRef, useState} from "react";

export function useShowTime() {
  const [seconds, setSeconds] = useState(0)
  const timeRef = useRef({
    startTime: Date.now(),
    pauseTime: null,
    totalPauseTime: 0,
    timerRef: 0
  })

  useEffect(()=>{
    startTime()
  }, [])

  const startTime = () => {
    timeRef.current.totalPauseTime += timeRef.current.pauseTime ? Math.trunc((Date.now() - timeRef.current.pauseTime) / 1000) : 0

    timeRef.current.timerRef = setInterval(() => {
      let durationSeconds = Math.trunc((Date.now() - timeRef.current.startTime) / 1000) - timeRef.current.totalPauseTime
      setSeconds(() => durationSeconds)
    }, 1000)
  }
  const pauseTime = () => {
    clearInterval(timeRef.current.timerRef)
    timeRef.current.pauseTime = Date.now()
  }

  return [seconds, startTime, pauseTime]
}

export function useForceUpdate(){
  const [value, setValue] = useState(0);
  return () => setValue(value => value + 1);
}
