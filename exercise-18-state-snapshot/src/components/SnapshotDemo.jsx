import { useState } from 'react'

const SnapshotDemo = () => {
  const [count, setCount] = useState(0)
  const [snapshot, setSnapshot] = useState(null)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleSnapshot = () => {
    setSnapshot(count)
  }

  const handleRestore = () => {
    if (snapshot !== null) {
      setCount(snapshot)
    }
  }

  return (
    <div className="demo">
      <h1>State as a Snapshot Demo</h1>
      <p className="count">Count: {count}</p>
      <p className="snapshot-info">
        Snapshot: {snapshot === null ? '(chưa lưu)' : snapshot}
      </p>
      <div className="actions">
        <button type="button" onClick={handleIncrement}>
          Increment
        </button>
        <button type="button" onClick={handleSnapshot}>
          Take Snapshot
        </button>
        <button type="button" onClick={handleRestore} disabled={snapshot === null}>
          Restore Snapshot
        </button>
      </div>
    </div>
  )
}

export default SnapshotDemo
