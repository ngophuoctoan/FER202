import animals from './data'
import AnimalCard from './components/AnimalCard'
import './App.css'

function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map((info) => `${info[0]}: ${info[1]}`)
    .join('\n')
  alert(alertInformation)
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Exercise 19 — PropTypes</h1>
        <p>Animal cards với PropTypes và defaultProps.</p>
      </header>
      <div className="wrapper">
        {animals.map((animal) => (
          <AnimalCard
            key={animal.name}
            name={animal.name}
            scientificName={animal.scientificName}
            size={animal.size}
            diet={animal.diet}
            additional={animal.additional}
            showAdditional={showAdditional}
          />
        ))}
      </div>
    </div>
  )
}

export default App
