import { useSelector } from 'react-redux'

function Cart() {
  const items = useSelector((state) => state.cart.items)

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  return (
    <div className="card">
      <div className="card-header">
        <h2>Cart</h2>
      </div>
      <div className="card-body">
        {items.length === 0 ? (
          <p className="muted">Cart is empty. Add a product to get started.</p>
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Catalogs</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>{item.catalogs.join(', ')}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="cart-totals">
              <p>
                Total items: <strong>{totalItems}</strong>
              </p>
              <p>
                Total price: <strong>${totalPrice.toFixed(2)}</strong>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
