function NewsCard({ news }) {
  return (
    <div className="news-card">
      <img src={`/${news.images}`} alt={news.title} className="news-card-image" />
      <h3 className="news-card-title">{news.title}</h3>
      <p className="news-card-desc">{news.description}</p>
      <a href="#!" className="news-card-link">
        {news.title}
      </a>
    </div>
  )
}

export default NewsCard
