import { useState } from 'react'
import HeavyComponent from '../moving-state-down/HeavyComponent'
import MovingBlock from './MovingBlock'

// ScrollableContainer component that manages scroll state
// HeavyComponent is passed as children
// When the parent rerenders, children prop reference doesn't change
// So HeavyComponent doesn't rerender even though parent state changed
function ScrollableContainer({ children }) {
  const [position, setPosition] = useState(0)

  const onScroll = (e) => {
    const calculated = Math.min(300, Math.max(0, e.target.scrollTop / 2))
    setPosition(calculated)
  }

  return (
    <div className="scrollable-container" onScroll={onScroll}>
      <div className="scroll-content">
        <MovingBlock position={position} />
        {children}
      </div>
    </div>
  )
}

// Solution: HeavyComponent is passed as children prop
// The children prop reference doesn't change when parent state changes
// React optimizes by not rerendering children when parent rerenders
// HeavyComponent doesn't rerender, making scrolling smooth
function ChildrenPropScroll() {
  return (
    <div className="example-container">
      <h2>With Children Prop (Solution)</h2>
      {/* <p className="description">
        HeavyComponent is passed as a children prop to ScrollableContainer.
        When scroll state changes, ScrollableContainer rerenders, but the children prop
        reference doesn't change. React optimizes by not rerendering children, so HeavyComponent
        doesn't rerender, making scrolling smooth and responsive.
      </p> */}
      
      <ScrollableContainer>
        <HeavyComponent />
      </ScrollableContainer>
    </div>
  )
}

export default ChildrenPropScroll

