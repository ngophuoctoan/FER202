import { useEffect, useState } from 'react'
import axios from 'axios'

const POST_URL = 'https://jsonplaceholder.typicode.com/posts/1'
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

function AxiosDemo() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState(null)
  const [listLoading, setListLoading] = useState(false)
  const [listError, setListError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    axios
      .get(POST_URL)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const fetchPosts = () => {
    setListLoading(true)
    setListError(null)

    axios
      .get(POSTS_URL)
      .then((response) => {
        setPosts(response.data.slice(0, 10))
      })
      .catch((err) => {
        setListError(err.message)
        setPosts(null)
      })
      .finally(() => {
        setListLoading(false)
      })
  }

  const clearPosts = () => {
    setPosts(null)
    setListError(null)
  }

  if (error) {
    return (
      <div className="axios-demo">
        <h1>Axios Demo</h1>
        <div className="alert alert-error">Error: {error}</div>
      </div>
    )
  }

  return (
    <div className="axios-demo">
      <h1>Axios Demo</h1>

      <section className="panel">
        <h2 className="section-title">GET /posts/1</h2>
        {loading || !data ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="post">
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <p className="meta">
              userId: {data.userId} · id: {data.id}
            </p>
          </div>
        )}
      </section>

      <section className="panel">
        <h2 className="section-title">Optional — List posts</h2>
        <div className="btn-row">
          <button type="button" className="btn btn-primary" onClick={fetchPosts}>
            Load posts list
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={clearPosts}
            disabled={!posts && !listError}
          >
            Clear list
          </button>
        </div>

        {listLoading && <div className="loading">Loading posts...</div>}
        {listError && (
          <div className="alert alert-error">Error: {listError}</div>
        )}

        {posts && (
          <ul className="posts-list">
            {posts.map((post) => (
              <li key={post.id}>
                <strong>
                  #{post.id} — {post.title}
                </strong>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

export default AxiosDemo
