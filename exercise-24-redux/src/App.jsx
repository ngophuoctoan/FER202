import { Provider } from 'react-redux'
import { store } from './store/store'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="app container">
        <header className="app-header">
          <h1>Exercise 24 — Introduction to Redux</h1>
          <p>Shopping cart với Redux Toolkit: add / update / delete.</p>
        </header>

        <main className="layout">
          <ProductList />
          <Cart />
        </main>
      </div>
    </Provider>
  )
}

export default App
