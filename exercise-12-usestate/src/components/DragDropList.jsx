import { useState } from 'react'

const INITIAL_ITEMS = ['Item A', 'Item B', 'Item C', 'Item D', 'Item E']

function DragDropList() {
  const [items, setItems] = useState(INITIAL_ITEMS)
  const [draggingItem, setDraggingItem] = useState(null)

  const onDragStart = (index) => {
    setDraggingItem(index)
  }

  const onDragOver = (e) => {
    e.preventDefault()
  }

  const onDrop = (dropIndex) => {
    if (draggingItem === null || draggingItem === dropIndex) return

    setItems((prev) => {
      const next = [...prev]
      const [removed] = next.splice(draggingItem, 1)
      next.splice(dropIndex, 0, removed)
      return next
    })
  }

  const onDragEnd = () => {
    setDraggingItem(null)
  }

  return (
    <div className="demo-card">
      <h2>7. Drag & Drop List</h2>
      <p className="hint">Drag items to reorder.</p>
      <ul className="drag-list">
        {items.map((item, index) => (
          <li
            key={item}
            draggable
            onDragStart={() => onDragStart(index)}
            onDragOver={onDragOver}
            onDrop={() => onDrop(index)}
            onDragEnd={onDragEnd}
            className={draggingItem === index ? 'dragging' : ''}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DragDropList
