import { useEffect, useState } from 'react'

function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div>
      <p className="size-display">
        Window size: {size.width} x {size.height}
      </p>
      <p className="muted">Resize the browser window to see updates.</p>
    </div>
  )
}

export default WindowSize
