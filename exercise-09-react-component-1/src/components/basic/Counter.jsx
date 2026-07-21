import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter-box">
      <h2>Counter</h2>
      <p className="counter-value">{count}</p>
      <div className="counter-actions">
        <button type="button" onClick={() => setCount((c) => c - 1)}>
          − Decrement
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          + Increment
        </button>
      </div>
    </div>
  )
}

export default Counter
