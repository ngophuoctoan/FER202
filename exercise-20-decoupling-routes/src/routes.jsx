import { Route, useParams } from 'react-router-dom'

function Home() {
  return <h1>Home Page</h1>
}

function Products() {
  return <h1>Products Page</h1>
}

function About() {
  return <h1>About Page</h1>
}

function Contact() {
  return <h1>Contact Page</h1>
}

function UserProfile() {
  const { userId } = useParams()
  return <h1>User Profile: {userId ?? 'Guest'}</h1>
}

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/users/:userId?',
    element: <UserProfile />,
  },
]

export const renderRoutes = () =>
  routes.map((route, index) => (
    <Route key={index} path={route.path} element={route.element} />
  ))
