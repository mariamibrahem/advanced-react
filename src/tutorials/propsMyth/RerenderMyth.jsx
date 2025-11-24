import { useRef, useState } from 'react'
import RefComponent from './RefComponent'

// This example demonstrates that refs don't cause rerenders
// Even when a ref value changes, components don't rerender
function RerenderMyth() {
  const refValue = useRef(0)
  const [counter, setCounter] = useState(0)

  const changeRefValue = () => {
    refValue.current += 1
    // Force a rerender to show the updated ref value
    // But notice: RefComponent only rerenders because the parent rerenders,
    // NOT because refValue.current changed!
    setCounter(prev => prev + 1)
  }

  const changeRefWithoutRerender = () => {
    refValue.current += 1
    // This changes the ref value but doesn't cause any rerender
    // The ref value is updated, but you won't see it until the next rerender
    console.log('Ref value changed to:', refValue.current, 'but no rerender occurred!')
  }

  return (
    <div className="example-container">
      <h2>Rerender Myth: Refs Don't Cause Rerenders</h2>
      
      <div className="demo-controls">
        <button 
          className="open-modal-btn"
          onClick={changeRefValue}
        >
          Change Ref Value + Rerender Parent (Ref: {refValue.current})
        </button>
        <button 
          className="open-modal-btn"
          onClick={changeRefWithoutRerender}
          style={{ marginLeft: '1rem', backgroundColor: '#6c757d' }}
        >
          Change Ref Only (No Rerender)
        </button>
        <p className="parent-info">
          Parent rerender count: {counter}
        </p>
      </div>

      <RefComponent refValue={refValue} />
    </div>
  )
}

export default RerenderMyth

