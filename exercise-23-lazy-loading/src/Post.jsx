export default function Post({ post }) {
  if (!post) return null

  return (
    <article className="card post-card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      {post.userId != null ? <p className="meta">User ID: {post.userId}</p> : null}
    </article>
  )
}
