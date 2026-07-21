import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import Contact from './pages/Contact'
import Quiz from './pages/Quiz'
import QuizReview from './pages/QuizReview'
import QuizResult from './pages/QuizResult'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quizzes" element={<Quiz />} />
          <Route path="/quiz/review" element={<QuizReview />} />
          <Route path="/quiz/result" element={<QuizResult />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="app-footer text-center text-muted">
        <p>Online Quiz Application — Lab 6 (Redux Toolkit)</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
