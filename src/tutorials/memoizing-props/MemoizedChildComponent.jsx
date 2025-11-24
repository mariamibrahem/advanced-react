import { memo, useRef, useEffect } from 'react'

const MemoizedChildComponent = memo(function MemoizedChildComponent({ data, onClick }) {
  const renderCount = useRef(0)
  renderCount.current += 1

  useEffect(() => {
    console.log('Child rerendered! Render count:', renderCount.current)
  })

  return (
    <div className="ref-component" style={{ marginTop: '2rem', padding: '1rem', border: '2px solid #28a745' }}>
      <h3>✅ Child Component (Correct Approach)</h3>
      <div className="ref-info">
        <p><strong>Render Count:</strong> {renderCount.current}</p>
        {/* <p><strong>Parent Counter:</strong> {parentCounter}</p> */}
        <p><strong>Data Value:</strong> {data.value}</p>
        <p style={{ color: '#28a745', fontWeight: 'bold' }}>
          ✅ Only rerenders when props change
        </p>
        <button onClick={onClick} style={{ marginTop: '1rem' }}>
          Update Data
        </button>
      </div>
    </div>
  )
})

export default MemoizedChildComponent

