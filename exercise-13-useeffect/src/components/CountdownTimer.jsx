import { useEffect, useState } from 'react'

function CountdownTimer({ initialValue }) {
  const [timeRemaining, setTimeRemaining] = useState(initialValue)

  useEffect(() => {
    setTimeRemaining(initialValue)

    if (initialValue <= 0) return undefined

    const intervalId = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [initialValue])

  return (
    <div>
      <p className="timer-display">Time Remaining: {timeRemaining}</p>
      {timeRemaining === 0 && <p className="muted">Countdown finished.</p>}
    </div>
  )
}

export default CountdownTimer
