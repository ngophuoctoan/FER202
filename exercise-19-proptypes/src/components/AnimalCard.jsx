import PropTypes from 'prop-types'
import './AnimalCard.css'

export default function AnimalCard({
  name,
  scientificName,
  size,
  diet,
  additional = { notes: 'No Additional Information' },
  showAdditional,
}) {
  return (
    <div className="animal-card">
      <h2>{name}</h2>
      <h3>{scientificName}</h3>
      <h4>{size} kg</h4>
      <p className="diet">{diet.join(', ')}</p>
      <button type="button" onClick={() => showAdditional(additional)}>
        More Info
      </button>
    </div>
  )
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
}

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information',
  },
}
