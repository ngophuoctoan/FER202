import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cartSlice'

function ProductList() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.items)

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-primary text-white">
        <h2 className="h5 mb-0">Product List</h2>
      </div>
      <div className="card-body">
        <div className="row g-3">
          {products.map((product) => (
            <div key={product.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border">
                <div className="card-body d-flex flex-column">
                  <h3 className="h6 card-title">{product.name}</h3>
                  <p className="small text-muted mb-1">ID: {product.id}</p>
                  <p className="card-text flex-grow-1">{product.description}</p>
                  <p className="fw-semibold mb-2">${product.price.toFixed(2)}</p>
                  <div className="mb-3">
                    {product.catalogs.map((c) => (
                      <span key={c} className="badge text-bg-secondary me-1">
                        {c}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="btn btn-success mt-auto"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
