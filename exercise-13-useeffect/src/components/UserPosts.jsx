import { useEffect, useState } from 'react'

function UserPosts({ userId }) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch posts')
        return res.json()
      })
      .then((data) => {
        if (!cancelled) {
          setPosts(data)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [userId])

  if (loading) return <p className="muted">Loading posts for user {userId}...</p>
  if (error) return <p className="error">{error}</p>

  return (
    <div className="posts">
      <p className="muted">
        {posts.length} posts for userId = {userId}
      </p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserPosts
