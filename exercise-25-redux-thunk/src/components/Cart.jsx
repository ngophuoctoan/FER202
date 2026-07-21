import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeFromCart } from '../store/cartSlice'
import ProductList from './ProductList'

function Cart() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  return (
    <div>
      <ProductList />

      <div className="card shadow-sm">
        <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
          <h2 className="h5 mb-0">Cart — Selected Products</h2>
          {items.length > 0 && (
            <button
              type="button"
              className="btn btn-sm btn-outline-light"
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </button>
          )}
        </div>
        <div className="card-body">
          {items.length === 0 ? (
            <p className="text-muted mb-0">
              Chưa có sản phẩm nào. Nhấn <strong>Add to Cart</strong> ở danh sách
              trên.
            </p>
          ) : (
            <>
              <div className="table-responsive">
                <table className="table table-striped align-middle">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Catalogs</th>
                      <th>Subtotal</th>
                      <th></th>
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
                        <td>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="d-flex flex-wrap gap-4">
                <p className="mb-0">
                  Total items: <strong>{totalItems}</strong>
                </p>
                <p className="mb-0">
                  Total price: <strong>${totalPrice.toFixed(2)}</strong>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
