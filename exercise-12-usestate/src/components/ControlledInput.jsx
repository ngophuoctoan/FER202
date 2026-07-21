import { useState } from 'react'

function ControlledInput() {
  const [text, setText] = useState('')

  return (
    <div className="demo-card">
      <h2>2. Controlled Input</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p className="mirror-text">
        You typed: <strong>{text || '—'}</strong>
      </p>
    </div>
  )
}

export default ControlledInput
