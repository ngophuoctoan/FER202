import { useState } from 'react'

const COLORS = ['red', 'blue', 'green', 'yellow']

function ColorSwitcher() {
  const [color, setColor] = useState('red')

  return (
    <div className="demo-card">
      <h2>5. Color Switcher</h2>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        {COLORS.map((c) => (
          <option key={c} value={c}>
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </option>
        ))}
      </select>
      <div className="color-box" style={{ backgroundColor: color }}>
        Background: {color}
      </div>
    </div>
  )
}

export default ColorSwitcher
