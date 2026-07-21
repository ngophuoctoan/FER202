import { StrictMode } from 'react'
import SnapshotDemo from './components/SnapshotDemo'
import './App.css'

function App() {
  return (
    <StrictMode>
      <div className="app">
        <SnapshotDemo />
      </div>
    </StrictMode>
  )
}

export default App
