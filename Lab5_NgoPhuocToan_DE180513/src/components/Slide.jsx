import Carousel from 'react-bootstrap/Carousel'

const slideImages = ['/images/slide1.jpg', '/images/slide2.jpg', '/images/slide3.jpg']

function Slide() {
  return (
    <Carousel className="mb-4">
      {slideImages.map((src) => (
        <Carousel.Item key={src}>
          <img className="d-block w-100 slide-image" src={src} alt="slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Slide
