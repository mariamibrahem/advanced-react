import { useRef, useEffect } from 'react'

// Component that receives a ref as a prop
// This component will track how many times it has rendered
function RefComponent({ refValue }) {

  return (
    <div className="ref-component">
      <h3>Component Receiving Ref</h3>
      <div className="ref-info">
        <p><strong>Ref Value:</strong> {refValue.current}</p>
      </div>
    </div>
  )
}

export default RefComponent

