import Counter from './components/Counter'
import QuestionBank from './components/QuestionBank'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Exercise 15 — useReducer</h1>
        <p>Counter và QuestionBank với useReducer.</p>
      </header>

      <main className="sections">
        <section className="demo-card">
          <h2>1. Counter (INCREMENT / DECREMENT / RESET)</h2>
          <Counter />
        </section>

        <section className="demo-card">
          <h2>2. Question Bank Quiz</h2>
          <QuestionBank />
        </section>
      </main>
    </div>
  )
}

export default App
