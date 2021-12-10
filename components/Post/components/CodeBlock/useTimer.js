import { useState, useEffect } from "react"

const useTimer = ms => {
  const [timer, setTimer] = useState(null)

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [timer])

  const startTimer = cb => {
    const newTimer = setTimeout(() => {
      cb()
      clearTimeout(newTimer)
    }, ms)

    setTimer(newTimer)
  }

  return startTimer
}

export default useTimer
