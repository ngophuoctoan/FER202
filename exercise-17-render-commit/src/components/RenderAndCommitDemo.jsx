import { useState } from 'react'

const RenderAndCommitDemo = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="demo">
      <h1>Render and Commit Demo</h1>
      <p className="count">Count: {count}</p>
      <button type="button" onClick={handleClick}>
        Increment
      </button>
    </div>
  )
}

export default RenderAndCommitDemo
