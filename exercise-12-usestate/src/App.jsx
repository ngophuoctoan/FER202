import Counter from './components/Counter'
import ControlledInput from './components/ControlledInput'
import ToggleVisibility from './components/ToggleVisibility'
import TodoList from './components/TodoList'
import ColorSwitcher from './components/ColorSwitcher'
import SearchFilter from './components/SearchFilter'
import DragDropList from './components/DragDropList'

const SECTIONS = [
  { id: 'counter', label: 'Counter', Component: Counter },
  { id: 'input', label: 'Controlled Input', Component: ControlledInput },
  { id: 'toggle', label: 'Toggle', Component: ToggleVisibility },
  { id: 'todo', label: 'Todo List', Component: TodoList },
  { id: 'color', label: 'Color Switcher', Component: ColorSwitcher },
  { id: 'search', label: 'Search Filter', Component: SearchFilter },
  { id: 'drag', label: 'Drag & Drop', Component: DragDropList },
]

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Exercise 12 — useState</h1>
        <p>Các ví dụ thực hành hook useState trong React.</p>
        <nav className="nav">
          {SECTIONS.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main className="sections">
        {SECTIONS.map(({ id, Component }) => (
          <section key={id} id={id}>
            <Component />
          </section>
        ))}
      </main>
    </div>
  )
}

export default App
