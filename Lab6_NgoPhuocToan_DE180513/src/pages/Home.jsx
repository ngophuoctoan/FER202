import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

function Home() {
  return (
    <Container className="py-5 text-center">
      <h1>Welcome to Quiz App</h1>
      <p className="text-muted">
        Lab 6 — Redux, Redux Thunk &amp; Redux Toolkit
      </p>
      <Link to="/quizzes" className="btn btn-primary btn-lg">
        Start Quiz
      </Link>
    </Container>
  )
}

export default Home
