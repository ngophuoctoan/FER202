import { Link, useParams } from 'react-router-dom'
import { users } from './data'

function UserDetail() {
  const { userId } = useParams()
  const user = users.find((u) => String(u.id) === String(userId))

  if (!user) {
    return (
      <section className="panel">
        <h2>User not found</h2>
        <Link to="/users">← Back to users</Link>
      </section>
    )
  }

  return (
    <section className="panel detail">
      <h2>
        User #{user.id}
      </h2>
      <dl>
        <dt>First Name</dt>
        <dd>{user.firstName}</dd>
        <dt>Last Name</dt>
        <dd>{user.lastName}</dd>
        <dt>Age</dt>
        <dd>{user.age}</dd>
      </dl>
      <Link to="/users">← Back to users</Link>
    </section>
  )
}

export default UserDetail
