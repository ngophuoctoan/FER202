import { useState } from 'react'

const FRUITS = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Kiwi',
  'Lemon',
  'Mango',
  'Orange',
]

function SearchFilter() {
  const [query, setQuery] = useState('')

  const filtered = FRUITS.filter((fruit) =>
    fruit.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div className="demo-card">
      <h2>6. Search Filter</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search fruits..."
      />
      <ul className="filter-list">
        {filtered.length === 0 && <li className="empty">No matches.</li>}
        {filtered.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchFilter
