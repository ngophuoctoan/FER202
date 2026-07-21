import { BrowserRouter, NavLink, Route, Routes, Navigate } from 'react-router-dom'
import UsersList from './UsersList'
import UserDetail from './UserDetail'
import DishesList from './DishesList'
import DishDetail from './DishDetail'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <h1>Exercise 21 — Resource IDs</h1>
          <nav className="main-nav">
            <NavLink to="/users" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Users
            </NavLink>
            <NavLink to="/dishes" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Dishes
            </NavLink>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:userId" element={<UserDetail />} />
          <Route path="/dishes" element={<DishesList />} />
          <Route path="/dishes/:id" element={<DishDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
