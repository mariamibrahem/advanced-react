import { Link } from 'react-router-dom'
import ChildrenPropScroll from '../tutorials/children-prop-composition/ChildrenPropScroll'
import StateBasedScroll from '../tutorials/children-prop-composition/StateBasedScroll'
import '../App.css'

function ChildrenPropComposition() {
  return (
    <div className="tutorial-page">
      <h1>Children Prop Pattern for Performance</h1>
      <p className="tutorial-intro">
        This tutorial demonstrates how using the <strong>children prop pattern</strong> can improve performance.
        When you pass components as children, React optimizes by not rerendering them when parent state changes,
        making interactions like scrolling much smoother.
      </p>
      
      <div className="examples-container">
        <StateBasedScroll />
        <ChildrenPropScroll />
      </div>
      
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  )
}

export default ChildrenPropComposition



