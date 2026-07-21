import { useCart } from '../context/CartContext'

function Cart() {
  const { cartItems, removeFromCart, clearCart, totalCount, totalValue } = useCart()

  return (
    <div className="cart">
      <h3>Cart</h3>
      <p>
        Total items: <strong>{totalCount}</strong> — Total value:{' '}
        <strong>${totalValue.toFixed(2)}</strong>
      </p>

      {cartItems.length === 0 ? (
        <p className="muted">Cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.cartId}>
                <span>
                  {item.name} — ${item.price.toFixed(2)}
                </span>
                <button
                  type="button"
                  className="btn-danger"
                  onClick={() => removeFromCart(item.cartId)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button type="button" className="btn-clear" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  )
}

export default Cart
