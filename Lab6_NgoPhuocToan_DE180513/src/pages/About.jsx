import Container from 'react-bootstrap/Container'

function About() {
  return (
    <Container className="py-4 about-page">
      <h1 className="mb-4">About Redux, Redux Thunk &amp; Redux Toolkit</h1>

      <section className="about-section mb-4">
        <h2>1. Redux</h2>
        <p>
          Redux là thư viện quản lý <strong>state toàn cục</strong> của ứng dụng.
          State nằm trong một <code>store</code> duy nhất. Component không sửa
          state trực tiếp — phải <code>dispatch</code> một <strong>action</strong>,
          rồi <strong>reducer</strong> cập nhật state.
        </p>
        <p className="mb-0">
          Trong Lab 6, đáp án người dùng (<code>answers</code>), câu hỏi hiện tại (
          <code>currentIndex</code>) và kết quả chấm bài (<code>results</code>)
          đều lưu trong Redux store, không dùng <code>useState</code> rải rác.
        </p>
      </section>

      <section className="about-section mb-4">
        <h2>2. Redux Thunk</h2>
        <p>
          Reducer phải là hàm đồng bộ (pure). Khi cần làm việc{' '}
          <strong>bất đồng bộ</strong> (gọi API, chờ timeout, kiểm tra đáp án), dùng{' '}
          <strong>Redux Thunk</strong>: một hàm nhận <code>dispatch</code> /{' '}
          <code>getState</code>, có thể <code>await</code> rồi mới dispatch kết quả.
        </p>
        <p className="mb-0">
          Lab 6 dùng 2 thunk: <code>fetchQuestions</code> (load danh sách câu hỏi) và{' '}
          <code>checkAnswers</code> (so sánh đáp án người dùng với đáp án đúng).
          Package <code>redux-thunk</code> đã được cài; Redux Toolkit gắn sẵn
          middleware này trong <code>configureStore</code>.
        </p>
      </section>

      <section className="about-section mb-4">
        <h2>3. Redux Toolkit</h2>
        <p>Redux Toolkit (RTK) giúp viết Redux ngắn gọn hơn, gồm:</p>
        <ul>
          <li>
            <code>configureStore</code> — tạo store (đã có thunk middleware)
          </li>
          <li>
            <code>createSlice</code> — vừa tạo reducer vừa tạo actions (
            <code>selectAnswer</code>, <code>nextQuestion</code>, …)
          </li>
          <li>
            <code>createAsyncThunk</code> — viết thunk bất đồng bộ dễ dàng (
            <code>fetchQuestions</code>, <code>checkAnswers</code>)
          </li>
        </ul>
        <p className="mb-0">
          React-Redux kết nối UI với store qua <code>Provider</code>,{' '}
          <code>useSelector</code>, <code>useDispatch</code>.
        </p>
      </section>
    </Container>
  )
}

export default About
