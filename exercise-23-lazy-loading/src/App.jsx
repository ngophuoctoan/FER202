import { Suspense, lazy, useEffect, useState } from 'react'
import { fetchUser, fetchPost, fetchUsers, fetchPosts } from './api'
import './App.css'

const User = lazy(() => import('./User'))
const Post = lazy(() => import('./Post'))

function App() {
  const [sampleUser, setSampleUser] = useState(null)
  const [samplePost, setSamplePost] = useState(null)
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const [user, post, allUsers, allPosts] = await Promise.all([
          fetchUser(1),
          fetchPost(1),
          fetchUsers(),
          fetchPosts(),
        ])
        if (cancelled) return
        setSampleUser(user)
        setSamplePost(post)
        setUsers(allUsers)
        setPosts(allPosts)
      } catch (err) {
        if (!cancelled) setError(err.message)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  if (error) {
    return (
      <div className="app">
        <h1>Lazy Loading Demo</h1>
        <p className="error">Error: {error}</p>
      </div>
    )
  }

  return (
    <div className="app">
      <h1>Lazy Loading Demo</h1>

      <section>
        <h2>Sample (user #1 &amp; post #1)</h2>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          {sampleUser && <User user={sampleUser} />}
          {samplePost && <Post post={samplePost} />}
        </Suspense>
      </section>

      <section>
        <h2>All Users ({users.length})</h2>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <div className="grid">
            {users.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </div>
        </Suspense>
      </section>

      <section>
        <h2>All Posts ({posts.length})</h2>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <div className="grid posts-grid">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </Suspense>
      </section>
    </div>
  )
}

export default App
