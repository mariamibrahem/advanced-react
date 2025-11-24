import { useRef, useEffect } from 'react'

function ChildComponent({ data, onClick, title, message, borderColor = '#dc3545' }) {
  const renderCount = useRef(0)
  renderCount.current += 1

  useEffect(() => {
    console.log('Child rerendered! Render count:', renderCount.current)
  })

  return (
    <div className="ref-component" style={{ marginTop: '2rem', padding: '1rem', border: `2px solid ${borderColor}` }}>
      <h3>{title}</h3>
      <div className="ref-info">
        <p><strong>Render Count:</strong> {renderCount.current}</p>
        <p><strong>Data Value:</strong> {data.value}</p>
        <p style={{ color: borderColor, fontWeight: 'bold' }}>
          {message}
        </p>
        <button onClick={onClick} style={{ marginTop: '1rem' }}>
          Update Data
        </button>
      </div>
    </div>
  )
}

export default ChildComponent

