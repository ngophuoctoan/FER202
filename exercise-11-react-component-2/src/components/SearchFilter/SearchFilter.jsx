import { useState } from 'react'

const FRUITS = [
  'Apple',
  'Banana',
  'Orange',
  'Mango',
  'Pineapple',
  'Grape',
  'Watermelon',
  'Strawberry',
  'Blueberry',
  'Kiwi',
]

function SearchFilter() {
  const [query, setQuery] = useState('')

  const filtered = FRUITS.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <section className="panel">
      <h2>Search Filter</h2>
      <input
        className="search-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Lọc danh sách..."
      />
      <p className="muted">
        Hiển thị {filtered.length} / {FRUITS.length}
      </p>
      <ul className="filter-list">
        {filtered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {filtered.length === 0 && <p className="muted">Không có kết quả.</p>}
    </section>
  )
}

export default SearchFilter
