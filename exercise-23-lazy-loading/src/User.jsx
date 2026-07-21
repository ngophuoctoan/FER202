export default function User({ user }) {
  if (!user) return null

  return (
    <article className="card user-card">
      <h3>{user.name}</h3>
      <p className="meta">@{user.username}</p>
      <p>{user.email}</p>
      {user.phone ? <p className="meta">{user.phone}</p> : null}
      {user.company?.name ? <p className="meta">{user.company.name}</p> : null}
    </article>
  )
}
