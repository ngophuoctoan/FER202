import { useState } from 'react'
import {
  Navbar,
  Nav,
  Container,
  Carousel,
  Card,
  Row,
  Col,
  Button,
} from 'react-bootstrap'

const menuItems = [
  {
    title: 'Uthappizza',
    price: '$4.99',
    text: 'A unique combination of Indian Uthappam and Italian pizza.',
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80',
  },
  {
    title: 'Zucchipakoda',
    price: '$1.99',
    text: 'Deep fried Zucchini coated with mildly spiced chickpea flour.',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80',
  },
  {
    title: 'Vadonut',
    price: '$1.99',
    text: 'A combination of vada and donut, soft and sweet.',
    img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80',
  },
  {
    title: 'ElaiCheese Cake',
    price: '$2.99',
    text: 'A delectable, semi-sweet New York Style Cheese Cake.',
    img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&q=80',
  },
]

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    caption: 'Ristorante con Fusion',
    text: 'Unique fusion dining experience',
  },
  {
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
    caption: 'Warm Atmosphere',
    text: 'Perfect for family and friends',
  },
  {
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80',
    caption: 'Fresh Ingredients',
    text: 'From farm to table every day',
  },
]

function App() {
  const [index, setIndex] = useState(0)

  return (
    <div className="lab-site">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Ristorante con Fusion</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#menu">Menu</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel
        id="home"
        activeIndex={index}
        onSelect={(selected) => setIndex(selected)}
        className="hero-carousel"
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.caption}>
            <img
              className="d-block w-100 carousel-img"
              src={slide.img}
              alt={slide.caption}
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="py-5" id="menu">
        <h2 className="text-center mb-4">Our Menu</h2>
        <Row xs={1} md={2} lg={4} className="g-4">
          {menuItems.map((item) => (
            <Col key={item.title}>
              <Card className="h-100 shadow-sm menu-card">
                <Card.Img variant="top" src={item.img} alt={item.title} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-primary">{item.price}</span>
                    <Button variant="outline-primary" size="sm">
                      Order
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <section className="bg-light py-5" id="about">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>About Us</h2>
              <p>
                We take inspiration from the World&apos;s best cuisines and create
                a unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses!
              </p>
              <Button variant="primary">Reserve a Table</Button>
            </Col>
            <Col md={6} className="mt-3 mt-md-0">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80"
                alt="Restaurant interior"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="footer bg-dark text-light py-4" id="contact">
        <Container>
          <Row>
            <Col md={4} className="mb-3">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#menu">Menu</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </Col>
            <Col md={4} className="mb-3">
              <h5>Our Address</h5>
              <address className="mb-0">
                121, Clear Water Bay Road
                <br />
                Clear Water Bay, Kowloon
                <br />
                HONG KONG
                <br />
                Tel: +852 1234 5678
              </address>
            </Col>
            <Col md={4} className="mb-3">
              <h5>Hours</h5>
              <p className="mb-0">
                Mon–Fri: 11:00 – 22:00
                <br />
                Sat–Sun: 10:00 – 23:00
              </p>
            </Col>
          </Row>
          <hr className="border-secondary" />
          <p className="text-center mb-0 small text-secondary">
            &copy; 2026 Ristorante con Fusion. Exercise 10 — React-Bootstrap.
          </p>
        </Container>
      </footer>
    </div>
  )
}

export default App
