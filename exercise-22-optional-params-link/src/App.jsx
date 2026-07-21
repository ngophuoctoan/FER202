import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const Home = () => <div className="page-content">Home Component</div>
const About = () => <div className="page-content">About Component</div>
const Contact = () => <div className="page-content">Contact Component</div>
const Profile = () => <div className="page-content">Profile Component</div>

function CustomNavbar() {
  return (
    <Navbar color="dark" dark expand="md" className="px-3">
      <NavbarBrand tag={Link} to="/">
        Logo
      </NavbarBrand>
      <Nav className="me-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/about">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/contact">
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
