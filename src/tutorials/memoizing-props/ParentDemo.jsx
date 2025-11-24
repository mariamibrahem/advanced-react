import { useState, useMemo, useCallback } from 'react'

function ParentDemo({ 
  title, 
  description, 
  childTitle,
  childMessage,
  childBorderColor,

  memoizeProps = false, 
  ChildComponent,
}) {
  const [parentCounter, setParentCounter] = useState(0)
  const [childData, setChildData] = useState({ value: 'Initial data' })

  const handleClick = memoizeProps 
    ? useCallback(() => {
        setChildData({ value: `Updated at ${Date.now()}` })
      }, [])
    : () => {
        setChildData({ value: `Updated at ${Date.now()}` })
      }

  const data = memoizeProps 
    ? useMemo(() => childData, [childData])
    : childData

  return (
    <div className="example-container">
      <h3>{title}</h3>
      <p className="description">{description}</p>

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

      <ChildComponent 
        data={data}
        onClick={handleClick}
        
        title={childTitle}
        message={childMessage}
        borderColor={childBorderColor}
      />
    </div>
  )
}

export default ParentDemo

