import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/news', label: 'News' },
  { to: '/quizzes', label: 'Quiz', matchQuiz: true },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const location = useLocation()

  return (
    <nav className="main-nav">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.end}
          className={({ isActive }) => {
            const quizActive =
              link.matchQuiz && location.pathname.startsWith('/quiz')
            return isActive || quizActive ? 'nav-link active' : 'nav-link'
          }}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
