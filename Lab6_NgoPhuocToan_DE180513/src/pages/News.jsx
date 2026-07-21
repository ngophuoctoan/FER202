import Container from 'react-bootstrap/Container'

const newsItems = [
  {
    id: 1,
    title: 'Redux Toolkit simplifies store setup',
    desc: 'configureStore and createSlice replace boilerplate reducers and action creators.',
  },
  {
    id: 2,
    title: 'Redux Thunk for async logic',
    desc: 'Use thunks to fetch quiz data or check answers asynchronously.',
  },
  {
    id: 3,
    title: 'React-Redux hooks',
    desc: 'useSelector and useDispatch connect components to the Redux store.',
  },
]

function News() {
  return (
    <Container className="py-4">
      <h1 className="mb-4" style={{ color: '#8b0000' }}>
        News Category
      </h1>
      <div className="row g-3">
        {newsItems.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="border p-3 h-100 bg-white">
              <h5>{item.title}</h5>
              <p className="mb-0 text-muted">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default News
