import { StrictMode } from 'react'
import RenderAndCommitDemo from './components/RenderAndCommitDemo'
import './App.css'

function App() {
  return (
    <StrictMode>
      <div className="app">
        <RenderAndCommitDemo />
      </div>
    </StrictMode>
  )
}

export default App
