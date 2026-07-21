import { Link } from 'react-router-dom'

function NavigationMenu() {
  return (
    <nav className="nav-menu">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/users">Users</Link>
      <Link to="/users/42">User 42</Link>
    </nav>
  )
}

export default NavigationMenu
