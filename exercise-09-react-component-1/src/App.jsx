import { useState } from 'react'
import { AboutMe, HelloWorld, Counter } from './components/basic'
import SimpleCard from './components/SimpleCard'
import SimpleWebsite from './components/SimpleWebsite'

const demos = [
  { id: 'all', label: 'Simple Website' },
  { id: 'hello', label: 'HelloWorld' },
  { id: 'about', label: 'AboutMe' },
  { id: 'counter', label: 'Counter' },
  { id: 'card', label: 'SimpleCard' },
]

const demoCard = {
  title: 'Demo Card',
  description: 'Component SimpleCard nhận props item (title, description, imageUrl).',
  imageUrl:
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80',
}

function App() {
  const [view, setView] = useState('all')

  return (
    <div className="app">
      <nav className="app-nav">
        <strong className="brand">Ex09 Components</strong>
        <div className="nav-links">
          {demos.map((d) => (
            <button
              key={d.id}
              type="button"
              className={view === d.id ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setView(d.id)}
            >
              {d.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="app-main">
        {view === 'all' && <SimpleWebsite />}
        {view === 'hello' && (
          <section className="demo-panel">
            <HelloWorld />
          </section>
        )}
        {view === 'about' && (
          <section className="demo-panel">
            <AboutMe />
          </section>
        )}
        {view === 'counter' && (
          <section className="demo-panel">
            <Counter />
          </section>
        )}
        {view === 'card' && (
          <section className="demo-panel">
            <h2>SimpleCard Demo</h2>
            <div className="cards-grid single">
              <SimpleCard item={demoCard} />
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
