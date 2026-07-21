import { dishes, useCart } from '../context/CartContext'

function DishesList() {
  const { addToCart } = useCart()

  return (
    <div className="dishes-list">
      <h3>Menu</h3>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <div>
              <strong>{dish.name}</strong>
              <span className="price">${dish.price.toFixed(2)}</span>
            </div>
            <button type="button" onClick={() => addToCart(dish)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DishesList
