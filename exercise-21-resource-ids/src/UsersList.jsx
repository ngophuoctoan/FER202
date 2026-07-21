import { Link } from 'react-router-dom'
import { users } from './data'

function UsersList() {
  return (
    <section className="panel">
      <h2>Users</h2>
      <p className="hint">Click an ID to view user details.</p>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link to={`/users/${user.id}`}>{user.id}</Link>
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default UsersList
