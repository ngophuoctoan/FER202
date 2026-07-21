import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProductAsync } from '../store/productsSlice'

const emptyForm = {
  name: '',
  price: '',
  description: '',
  catalogs: '',
}

function ProductForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const status = useSelector((state) => state.products.status)
  const error = useSelector((state) => state.products.error)
  const [form, setForm] = useState(emptyForm)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')

    if (!form.name.trim() || !form.price) {
      setMessage('Vui lòng nhập name và price.')
      return
    }

    try {
      await dispatch(addProductAsync(form)).unwrap()
      setForm(emptyForm)
      setMessage('Đã thêm sản phẩm (sau delay giả lập API 1s).')
      setTimeout(() => navigate('/cart'), 800)
    } catch (err) {
      setMessage(err.message || 'Không thêm được sản phẩm.')
    }
  }

  const loading = status === 'loading'

  return (
    <div className="card shadow-sm mx-auto" style={{ maxWidth: 560 }}>
      <div className="card-header bg-success text-white">
        <h2 className="h5 mb-0">Product Form</h2>
      </div>
      <div className="card-body">
        <p className="text-muted">
          Thêm sản phẩm mới qua <code>createAsyncThunk</code> (simulate API
          delay).
        </p>

        <form onSubmit={handleSubmit} className="vstack gap-3">
          <div>
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
              placeholder="New Product"
              required
            />
          </div>

          <div>
            <label className="form-label" htmlFor="price">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              min="0"
              step="0.01"
              className="form-control"
              value={form.price}
              onChange={handleChange}
              placeholder="19.99"
              required
            />
          </div>

          <div>
            <label className="form-label" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              rows="3"
              value={form.description}
              onChange={handleChange}
              placeholder="Product description"
            />
          </div>

          <div>
            <label className="form-label" htmlFor="catalogs">
              Catalogs (comma-separated)
            </label>
            <input
              id="catalogs"
              name="catalogs"
              className="form-control"
              value={form.catalogs}
              onChange={handleChange}
              placeholder="catalog1, catalog2"
            />
          </div>

          {message && (
            <div
              className={`alert ${error ? 'alert-danger' : 'alert-info'} mb-0`}
              role="alert"
            >
              {message}
            </div>
          )}

          <button type="submit" className="btn btn-success" disabled={loading}>
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                />
                Saving...
              </>
            ) : (
              'Add Product'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProductForm
