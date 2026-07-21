import { useState } from 'react'

const people = [
  { name: 'Jack', age: 50 },
  { name: 'Michael', age: 9 },
  { name: 'John', age: 40 },
  { name: 'Ann', age: 19 },
  { name: 'Elisabeth', age: 16 },
]

const isTeenager = (person) => person.age >= 10 && person.age <= 20

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

const person = {
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA',
  },
}

const createCounter = () => {
  let count = 0
  return () => ++count
}

const counterFn = createCounter()

const courses = ['FER202', 'PRJ301', 'DBI202', 'SWE201', 'MAS291']

function App() {
  const [activeTab, setActiveTab] = useState('navbar')
  const [promiseResult, setPromiseResult] = useState(null)
  const [counterValue, setCounterValue] = useState(0)

  const firstTeenager = people.find(isTeenager)
  const allTeenagers = people.filter(isTeenager)
  const everyTeenager = people.every(isTeenager)
  const anyTeenager = people.some(isTeenager)

  const numbers = [1, 2, 3, 4]
  const sum = numbers.reduce((acc, n) => acc + n, 0)
  const product = numbers.reduce((acc, n) => acc * n, 1)

  const companyNames = []
  companies.forEach((c) => companyNames.push(c.name))

  const companiesAfter1987 = companies.filter((c) => c.start > 1987)
  const retailCompanies = companies
    .filter((c) => c.category === 'Retail')
    .map((c) => ({ ...c, start: c.start + 1 }))
  const sortedByEnd = [...companies].sort((a, b) => a.end - b.end)
  const agesDesc = [...ages].sort((a, b) => b - a)
  const sumAges = ages.reduce((acc, age) => acc + age, 0)
  const { street } = person.address

  const runPromise = () => {
    setPromiseResult('Đang chạy...')
    const promise = new Promise((resolve, reject) => {
      const num = Math.floor(Math.random() * 10) + 1
      setTimeout(() => {
        if (num > 5) {
          resolve(`Success! Số ngẫu nhiên: ${num}`)
        } else {
          reject(`Error! Số ngẫu nhiên: ${num} (≤ 5)`)
        }
      }, 500)
    })

    promise
      .then((msg) => setPromiseResult(msg))
      .catch((err) => setPromiseResult(err))
  }

  const tabs = [
    { id: 'navbar', label: '1. Navbar' },
    { id: 'welcome', label: '2. Welcome' },
    { id: 'people', label: '3. People' },
    { id: 'reduce', label: '4. Reduce' },
    { id: 'es6', label: '5. ES6' },
    { id: 'promise', label: '6. Promise' },
  ]

  return (
    <div className="app">
      <header className="header">
        <h1>Exercise 04 — JSX &amp; ES6</h1>
        <nav className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={activeTab === tab.id ? 'tab active' : 'tab'}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="main">
        {activeTab === 'navbar' && (
          <section id="navbar-section" className="card">
            <h2>1. Simple Navbar (JSX)</h2>
            <nav className="simple-nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#courses">Courses</a>
            </nav>
            <p className="hint">Navbar được viết bằng JSX với các thẻ &lt;a&gt;.</p>
          </section>
        )}

        {activeTab === 'welcome' && (
          <section id="welcome-section" className="card">
            <h2>2. Welcome &amp; Courses</h2>
            <p className="welcome-text">Welcome to JSX &amp; ES6</p>
            <ul className="course-list">
              {courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </section>
        )}

        {activeTab === 'people' && (
          <section id="people-section" className="card">
            <h2>3. People Array Exercises</h2>
            <pre className="code-block">
              {JSON.stringify(people, null, 2)}
            </pre>
            <div className="result-grid">
              <div className="result-item">
                <strong>First teenager (find):</strong>
                <span>
                  {firstTeenager
                    ? `${firstTeenager.name} (${firstTeenager.age})`
                    : 'None'}
                </span>
              </div>
              <div className="result-item">
                <strong>All teenagers (filter):</strong>
                <span>
                  {allTeenagers.map((p) => `${p.name} (${p.age})`).join(', ')}
                </span>
              </div>
              <div className="result-item">
                <strong>Every is teenager? (every):</strong>
                <span>{String(everyTeenager)}</span>
              </div>
              <div className="result-item">
                <strong>Any is teenager? (some):</strong>
                <span>{String(anyTeenager)}</span>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'reduce' && (
          <section id="reduce-section" className="card">
            <h2>4. Array Reduce — Sum &amp; Product</h2>
            <p>
              Array: <code>[1, 2, 3, 4]</code>
            </p>
            <div className="result-grid">
              <div className="result-item">
                <strong>Sum (arrow + reduce):</strong>
                <span>{sum}</span>
              </div>
              <div className="result-item">
                <strong>Product (arrow + reduce):</strong>
                <span>{product}</span>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'es6' && (
          <section id="es6-section" className="card">
            <h2>5. Companies / Ages / Person (ES6)</h2>

            <h3>forEach — Company names</h3>
            <ul>
              {companyNames.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>

            <h3>filter — start &gt; 1987</h3>
            <ul>
              {companiesAfter1987.map((c) => (
                <li key={c.name}>
                  {c.name} ({c.start})
                </li>
              ))}
            </ul>

            <h3>Retail companies (start + 1 displayed)</h3>
            <ul>
              {retailCompanies.map((c) => (
                <li key={c.name}>
                  {c.name} — start: {c.start} (original + 1)
                </li>
              ))}
            </ul>

            <h3>Sort companies by end (asc)</h3>
            <ul>
              {sortedByEnd.map((c) => (
                <li key={c.name}>
                  {c.name} — end: {c.end}
                </li>
              ))}
            </ul>

            <h3>Sort ages (desc)</h3>
            <p>{agesDesc.join(', ')}</p>

            <h3>Sum ages with reduce</h3>
            <p>
              <strong>{sumAges}</strong>
            </p>

            <h3>Object destructuring — street</h3>
            <p>
              Street: <code>{street}</code>
            </p>

            <h3>Incrementing counter (closure)</h3>
            <button
              type="button"
              className="btn"
              onClick={() => setCounterValue(counterFn())}
            >
              Increment → {counterValue}
            </button>
          </section>
        )}

        {activeTab === 'promise' && (
          <section id="promise-section" className="card">
            <h2>6. Promise — Random Number</h2>
            <p>
              Sinh số ngẫu nhiên 1–10. Nếu &gt; 5 → Success, ngược lại → Error.
            </p>
            <button type="button" className="btn" onClick={runPromise}>
              Chạy Promise
            </button>
            {promiseResult && (
              <p
                className={
                  promiseResult.startsWith('Success')
                    ? 'promise-ok'
                    : promiseResult.startsWith('Error')
                      ? 'promise-err'
                      : 'promise-pending'
                }
              >
                {promiseResult}
              </p>
            )}
          </section>
        )}
      </main>
    </div>
  )
}

export default App
