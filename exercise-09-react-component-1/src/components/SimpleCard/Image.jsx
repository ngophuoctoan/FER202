function Image({ imageUrl, alt = '' }) {
  return (
    <img className="card-image" src={imageUrl} alt={alt || 'Card image'} />
  )
}

export default Image
