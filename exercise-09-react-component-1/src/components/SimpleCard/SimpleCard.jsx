import Title from './Title.jsx'
import Description from './Description.jsx'
import Image from './Image.jsx'

function SimpleCard({ item }) {
  const { title, description, imageUrl } = item

  return (
    <article className="simple-card">
      <Image imageUrl={imageUrl} alt={title} />
      <div className="simple-card-body">
        <Title title={title} />
        <Description description={description} />
      </div>
    </article>
  )
}

export default SimpleCard
