import { useState } from 'react'

function ToggleVisibility() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="demo-card">
      <h2>3. Toggle Visibility</h2>
      <button type="button" onClick={() => setVisible((v) => !v)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && (
        <p className="toggle-content">
          Hello! This text was hidden initially and is now visible.
        </p>
      )}
    </div>
  )
}

export default ToggleVisibility
