import { TodoList, Calculator, SearchFilter } from './components'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Exercise 11 — React Component 2</h1>
        <p>TodoList · Calculator · SearchFilter</p>
      </header>
      <main className="grid">
        <TodoList />
        <Calculator />
        <SearchFilter />
      </main>
    </div>
  )
}

export default App
