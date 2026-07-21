import { useState } from 'react'

function Calculator() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [op, setOp] = useState('+')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const calculate = (e) => {
    e.preventDefault()
    setError('')
    const x = Number(a)
    const y = Number(b)

    if (Number.isNaN(x) || Number.isNaN(y)) {
      setError('Vui lòng nhập số hợp lệ.')
      setResult(null)
      return
    }

    let value
    switch (op) {
      case '+':
        value = x + y
        break
      case '-':
        value = x - y
        break
      case '*':
        value = x * y
        break
      case '/':
        if (y === 0) {
          setError('Không thể chia cho 0.')
          setResult(null)
          return
        }
        value = x / y
        break
      default:
        setError('Phép toán không hợp lệ.')
        return
    }
    setResult(value)
  }

  return (
    <section className="panel">
      <h2>Calculator</h2>
      <form className="calc-form" onSubmit={calculate}>
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="Số A"
          step="any"
        />
        <select value={op} onChange={(e) => setOp(e.target.value)}>
          <option value="+">+</option>
          <option value="-">−</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="Số B"
          step="any"
        />
        <button type="submit">=</button>
      </form>
      {error && <p className="error">{error}</p>}
      {result !== null && !error && (
        <p className="result">
          Kết quả: <strong>{result}</strong>
        </p>
      )}
    </section>
  )
}

export default Calculator
