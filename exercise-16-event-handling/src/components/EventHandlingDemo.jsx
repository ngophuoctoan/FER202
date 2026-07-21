import { useState } from 'react'

const EventHandlingDemo = () => {
  const [count, setCount] = useState(0)

  const handleButtonClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="demo">
      <h1>Event Handling Demo</h1>
      <p className="count">Count: {count}</p>
      <button type="button" onClick={handleButtonClick}>
        Increase Count
      </button>
    </div>
  )
}

export default EventHandlingDemo
