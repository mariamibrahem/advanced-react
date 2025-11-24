import { useRef, useEffect } from 'react'

// Child component without React.memo
// Even though parent memoizes props, this still rerenders when parent rerenders
function ChildWithMemoizedProps({ data, onClick }) {
  const renderCount = useRef(0)
  renderCount.current += 1

  useEffect(() => {
    console.log('Child rerendered! Render count:', renderCount.current)
  })

  return (
    <div className="ref-component" style={{ marginTop: '2rem', padding: '1rem', border: '2px solid #dc3545' }}>
      <h3>❌ Child Component (No React.memo)</h3>
      <div className="ref-info">
        <p><strong>Render Count:</strong> {renderCount.current}</p>
        <p><strong>Data Value:</strong> {data.value}</p>
        <p style={{ color: '#dc3545', fontWeight: 'bold' }}>
          ⚠️ Rerenders every time parent rerenders, even with memoized props
        </p>
        <button onClick={onClick} style={{ marginTop: '1rem' }}>
          Update Data
        </button>
      </div>
    </div>
  )
}

export default ChildWithMemoizedProps

