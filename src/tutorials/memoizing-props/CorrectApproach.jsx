import { useState, useMemo, useCallback } from 'react'
import MemoizedChildComponent from './MemoizedChildComponent'

function CorrectApproach() {
  const [parentCounter, setParentCounter] = useState(0)
  const [childData, setChildData] = useState({ value: 'Initial data' })

  const handleClick = useCallback(() => {
    setChildData({ value: `Updated at ${Date.now()}` })
  }, [])

  const memoizedData = useMemo(() => childData, [childData])

  return (
    <div className="example-container">
      <h3>✅ Correct: Use React.memo on Child</h3>
      <p className="description">
        Use <code>React.memo</code> on the child. Memoizing props in parent only helps when combined with <code>React.memo</code>.
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

      <MemoizedChildComponent 
        data={memoizedData}
        onClick={handleClick}
        // parentCounter={parentCounter}
      />
    </div>
  )
}

export default CorrectApproach

