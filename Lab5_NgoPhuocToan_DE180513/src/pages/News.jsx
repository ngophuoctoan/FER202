import { newsLists } from '../data/news'
import NewsCard from '../components/NewsCard'

function News() {
  return (
    <div className="news-page">
      <h1 className="news-heading">News Category</h1>
      <div className="news-grid">
        {newsLists.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  )
}

export default News
