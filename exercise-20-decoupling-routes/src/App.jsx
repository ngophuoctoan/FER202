import { BrowserRouter, Routes } from 'react-router-dom'
import { renderRoutes } from './routes'
import NavigationMenu from './NavigationMenu'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <h1>Exercise 20 — Decoupling Routes</h1>
          <NavigationMenu />
        </header>
        <main>
          <Routes>{renderRoutes()}</Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
