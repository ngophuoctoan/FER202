import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Contact() {
  const [validated, setValidated] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setValidated(true)
  }

  return (
    <Container className="py-4">
      <h1 className="mb-4">Contact</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Your name" />
            <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="name@example.com" />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control required as="textarea" rows={4} />
          <Form.Control.Feedback type="invalid">
            Please enter a message.
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="primary">
          Send
        </Button>
      </Form>
    </Container>
  )
}

export default Contact
