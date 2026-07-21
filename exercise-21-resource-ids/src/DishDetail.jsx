import { Link, useParams } from 'react-router-dom'
import { dishes } from './data'

function DishDetail() {
  const { id } = useParams()
  const dish = dishes.find((d) => String(d.id) === String(id))

  if (!dish) {
    return (
      <section className="panel">
        <h2>Dish not found</h2>
        <Link to="/dishes">← Back to dishes</Link>
      </section>
    )
  }

  return (
    <section className="panel detail">
      <h2>{dish.name}</h2>
      {dish.label ? <span className="label">{dish.label}</span> : null}
      <dl>
        <dt>ID</dt>
        <dd>{dish.id}</dd>
        <dt>Category</dt>
        <dd>{dish.category}</dd>
        <dt>Price</dt>
        <dd>${dish.price}</dd>
        <dt>Featured</dt>
        <dd>{dish.featured ? 'Yes' : 'No'}</dd>
        <dt>Image</dt>
        <dd>
          <code>{dish.image}</code>
        </dd>
        <dt>Description</dt>
        <dd>{dish.description}</dd>
      </dl>
      <Link to="/dishes">← Back to dishes</Link>
    </section>
  )
}

export default DishDetail
