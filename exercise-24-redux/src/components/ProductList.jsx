import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, updateCart, deleteFromCart } from '../store/cartSlice'
import { products } from '../data/products'

function ProductList() {
  const dispatch = useDispatch()
  const [quantities, setQuantities] = useState(
    Object.fromEntries(products.map((p) => [p.id, 1])),
  )

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, Number(value) || 1),
    }))
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2>Product List</h2>
      </div>
      <div className="card-body">
        {products.map((product) => (
          <div key={product.id} className="product-row">
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="muted">ID: {product.id}</p>
              <p>{product.description}</p>
              <p>
                <strong>${product.price.toFixed(2)}</strong>
              </p>
              <p className="catalogs">
                Catalogs:{' '}
                {product.catalogs.map((c) => (
                  <span key={c} className="badge">
                    {c}
                  </span>
                ))}
              </p>
            </div>

            <div className="product-actions">
              <label>
                Qty
                <input
                  type="number"
                  min="1"
                  className="form-control qty-input"
                  value={quantities[product.id]}
                  onChange={(e) =>
                    handleQuantityChange(product.id, e.target.value)
                  }
                />
              </label>

              <button
                type="button"
                className="btn btn-success"
                onClick={() =>
                  dispatch(
                    addToCart({
                      ...product,
                      quantity: quantities[product.id],
                    }),
                  )
                }
              >
                Add to Cart
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  dispatch(
                    updateCart({
                      id: product.id,
                      quantity: quantities[product.id],
                    }),
                  )
                }
              >
                Update quantity
              </button>

              <button
                type="button"
                className="btn btn-danger"
                onClick={() => dispatch(deleteFromCart(product.id))}
              >
                Delete from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
