import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Slide from '../components/Slide'

function Home() {
  return (
    <Container>
      <Slide />

      <div className="text-center py-4">
        <h1>Welcome to Quiz App</h1>
        <p className="text-muted">Test your knowledge with our online quiz.</p>
        <Link to="/quiz" className="btn btn-primary btn-lg">
          Start Quiz
        </Link>
      </div>
    </Container>
  )
}

export default Home
