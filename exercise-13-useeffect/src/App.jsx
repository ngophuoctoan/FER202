import { useState } from 'react'
import UserPosts from './components/UserPosts'
import CountdownTimer from './components/CountdownTimer'
import WindowSize from './components/WindowSize'
import ValidatedInput from './components/ValidatedInput'

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function App() {
  const [userId, setUserId] = useState(1)
  const [timerKey, setTimerKey] = useState(0)
  const [initialSeconds, setInitialSeconds] = useState(10)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Exercise 13 — useEffect</h1>
        <p>Các ví dụ thực hành hook useEffect trong React.</p>
      </header>

      <main className="sections">
        <section className="demo-card">
          <h2>1. User Posts</h2>
          <label>
            User ID:{' '}
            <select
              value={userId}
              onChange={(e) => setUserId(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((id) => (
                <option key={id} value={id}>
                  {id}
                </option>
              ))}
            </select>
          </label>
          <UserPosts userId={userId} />
        </section>

        <section className="demo-card">
          <h2>2. Countdown Timer</h2>
          <div className="row">
            <label>
              Initial value:{' '}
              <input
                type="number"
                min="1"
                max="60"
                value={initialSeconds}
                onChange={(e) => setInitialSeconds(Number(e.target.value) || 1)}
              />
            </label>
            <button
              type="button"
              onClick={() => setTimerKey((k) => k + 1)}
            >
              Restart
            </button>
          </div>
          <CountdownTimer key={timerKey} initialValue={initialSeconds} />
        </section>

        <section className="demo-card">
          <h2>3. Window Size</h2>
          <WindowSize />
        </section>

        <section className="demo-card">
          <h2>4. Validated Input</h2>
          <p className="muted">Enter a valid email address:</p>
          <ValidatedInput
            validationFunction={isEmail}
            errorMessage="Please enter a valid email address."
          />
        </section>
      </main>
    </div>
  )
}

export default App
