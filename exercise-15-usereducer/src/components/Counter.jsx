import { useReducer } from 'react'

const initialCount = 0

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'RESET':
      return initialCount
    default:
      return state
  }
}

function Counter() {
  const [count, dispatch] = useReducer(counterReducer, initialCount)

  return (
    <div className="counter">
      <p className="count-display">{count}</p>
      <div className="btn-row">
        <button type="button" onClick={() => dispatch({ type: 'DECREMENT' })}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatch({ type: 'RESET' })}>
          Reset
        </button>
        <button type="button" onClick={() => dispatch({ type: 'INCREMENT' })}>
          Increment
        </button>
      </div>
    </div>
  )
}

export default Counter
