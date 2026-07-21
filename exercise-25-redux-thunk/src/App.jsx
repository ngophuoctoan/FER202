import { NavLink, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import ProductForm from './components/ProductForm'
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container">
          <span className="navbar-brand">Exercise 25 — Redux Thunk</span>
          <div className="navbar-nav ms-auto flex-row gap-3">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active fw-semibold' : ''}`
              }
            >
              Cart
            </NavLink>
            <NavLink
              to="/product-form"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active fw-semibold' : ''}`
              }
            >
              Product Form
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="container pb-5">
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-form" element={<ProductForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
