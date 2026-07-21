import { Link } from 'react-router-dom'
import { dishes } from './data'

function DishesList() {
  return (
    <section className="panel">
      <h2>Dishes</h2>
      <p className="hint">Click an ID to view dish details.</p>
      <ul className="dish-list">
        {dishes.map((dish) => (
          <li key={dish.id}>
            <Link to={`/dishes/${dish.id}`} className="dish-link">
              <span className="dish-id">#{dish.id}</span>
              <strong>{dish.name}</strong>
              <span className="price">${dish.price}</span>
              {dish.label ? <span className="label">{dish.label}</span> : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default DishesList
