import { ThemeProvider } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'
import ThemeButton from './components/ThemeButton'
import DishesList from './components/DishesList'
import Cart from './components/Cart'

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="app">
          <header className="app-header">
            <h1>Exercise 14 — useContext</h1>
            <p>Theme Context và Cart Context.</p>
          </header>

          <main className="sections">
            <section className="demo-card">
              <h2>1. Theme Context</h2>
              <ThemeButton />
            </section>

            <section className="demo-card">
              <h2>2. Cart Context</h2>
              <div className="cart-layout">
                <DishesList />
                <Cart />
              </div>
            </section>
          </main>
        </div>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
