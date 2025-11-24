import { useState } from 'react'
import HeavyComponent from '../moving-state-down/HeavyComponent'
import MovingBlock from './MovingBlock'

// Problem: HeavyComponent is directly in the component with state
// When scroll state changes, the entire component tree rerenders
// including HeavyComponent, making scrolling laggy
function StateBasedScroll() {
  const [position, setPosition] = useState(0)

  const onScroll = (e) => {
    const calculated = Math.min(300, Math.max(0, e.target.scrollTop / 2))
    setPosition(calculated)
  }

  return (
    <div className="example-container">
      <h2>Without Children Prop (Problem)</h2>
      <p className="description">
        HeavyComponent is directly rendered in the component that manages scroll state.
        Every scroll event updates state, causing the entire component tree (including HeavyComponent) to rerender.
        Notice how scrolling feels laggy and janky.
      </p>
      
      <div className="scrollable-container" onScroll={onScroll}>
        <div className="scroll-content">
          <MovingBlock position={position} />
          <HeavyComponent />
        </div>
      </div>
    </div>
  )
}

export default StateBasedScroll

