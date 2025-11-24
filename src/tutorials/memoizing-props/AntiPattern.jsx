import { useState, useMemo, useCallback } from 'react'
import ChildWithMemoizedProps from './ChildWithMemoizedProps'

function AntiPattern() {
  const [parentCounter, setParentCounter] = useState(0)
  const [childData, setChildData] = useState({ value: 'Initial data' })

  // ❌ ANTI-PATTERN: Memoizing props in parent, but child isn't wrapped in React.memo
  // This doesn't prevent rerenders - child still rerenders when parent rerenders
  const handleClick = useCallback(() => {
    setChildData({ value: `Updated at ${Date.now()}` })
  }, [])

  const memoizedData = useMemo(() => childData, [childData])

  return (
    <div className="example-container">
      <h3>❌ Anti-Pattern: Memoizing Props in Parent</h3>
      <p className="description">
        Memoizing props in parent doesn't prevent child rerenders without <code>React.memo</code>.
      </p>

      <div className="demo-controls">
        <button 
          className="open-modal-btn"
          onClick={() => setParentCounter(prev => prev + 1)}
        >
          Rerender Parent (Count: {parentCounter})
        </button>
        <button 
          className="open-modal-btn"
          onClick={handleClick}
          style={{ marginLeft: '1rem' }}
        >
          Update Child Data
        </button>
      </div>

      <ChildWithMemoizedProps 
        data={memoizedData}
        onClick={handleClick}
      />
    </div>
  )
}

export default AntiPattern

