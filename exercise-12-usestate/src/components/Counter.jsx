import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="demo-card">
      <h2>1. Counter</h2>
      <p className="count-display">{count}</p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
    </div>
  )
}

export default Counter
