import Container from 'react-bootstrap/Container'

function About() {
  return (
    <Container className="py-4">
      <h1 className="mb-3">About</h1>
      <p>
        Lab 6 builds a JavaScript Quiz using Redux Toolkit (<code>createSlice</code>,{' '}
        <code>configureStore</code>), React-Redux, and Redux Thunk for async answer checking.
      </p>
    </Container>
  )
}

export default About
