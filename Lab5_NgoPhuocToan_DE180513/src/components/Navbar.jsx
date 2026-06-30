import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/news', label: 'News' },
  { to: '/quiz', label: 'Quiz' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  return (
    <nav className="main-nav">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.end}
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
