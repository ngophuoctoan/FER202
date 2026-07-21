import { AboutMe, HelloWorld, Counter } from './basic'
import SimpleCard from './SimpleCard'

const sampleItems = [
  {
    title: 'Uthappizza',
    description: 'A unique combination of Indian Uthappam and Italian pizza.',
    imageUrl:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
  },
  {
    title: 'Zucchipakoda',
    description: 'Deep fried Zucchini with mildly spiced chickpea flour batter.',
    imageUrl:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
  },
  {
    title: 'Vadonut',
    description: 'A combination of vada and donut — soft and sweet.',
    imageUrl:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80',
  },
]

function SimpleWebsite() {
  return (
    <div className="simple-website">
      <header className="site-header">
        <h1>My Mini Site</h1>
        <p>Kết hợp các component: AboutMe, HelloWorld, Counter, SimpleCard</p>
      </header>

      <section className="site-section">
        <HelloWorld />
      </section>

      <section className="site-section">
        <AboutMe />
      </section>

      <section className="site-section">
        <Counter />
      </section>

      <section className="site-section">
        <h2>Featured Cards</h2>
        <div className="cards-grid">
          {sampleItems.map((item) => (
            <SimpleCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <p>© 2026 Exercise 09 — React Component 1</p>
      </footer>
    </div>
  )
}

export default SimpleWebsite
