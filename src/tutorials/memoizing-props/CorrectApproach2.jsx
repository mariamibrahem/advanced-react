import { useState, memo } from 'react'
import ChildComponentPrimitives from './ChildComponentPrimitives'

const MemoizedChild = memo(ChildComponentPrimitives)

function CorrectApproach2() {
  const [parentCounter, setParentCounter] = useState(0)
  const [childValue, setChildValue] = useState('Initial data')

  return (
    <div className="example-container">
      <h3>✅ Correct: React.memo with Primitive Props</h3>
      <p className="description">
        React.memo works without memoizing props when only primitive values (strings, numbers) are passed.
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
          onClick={() => setChildValue(`Updated at ${Date.now()}`)}
          style={{ marginLeft: '1rem' }}
        >
          Update Child Data
        </button>
      </div>

      <MemoizedChild 
        value={childValue}
        title="✅ Child Component (React.memo with primitives)"
        message="✅ Only rerenders when props change (no memoization needed for primitives)"
        borderColor="#28a745"
      />
    </div>
  )
}

export default CorrectApproach2

