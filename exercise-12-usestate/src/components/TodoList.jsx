import { useState } from 'react'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return
    setTodos((prev) => [...prev, { id: Date.now(), text: trimmed }])
    setInput('')
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <div className="demo-card">
      <h2>4. Todo List</h2>
      <form className="todo-form" onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo..."
        />
        <button type="submit">Add</button>
      </form>
      <ul className="todo-list">
        {todos.length === 0 && <li className="empty">No todos yet.</li>}
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button type="button" className="btn-danger" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
