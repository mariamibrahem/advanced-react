import { Link } from 'react-router-dom'
import RerenderMyth from '../tutorials/propsMyth/propsMyth'
import '../App.css'

function RerenderMyth() {
  return (
    <div className="tutorial-page">
      <h1>Children Prop Composition</h1>
      <p className="tutorial-intro">
        This tutorial demonstrates that <strong>props are not the cause of rerenders</strong>.
        Even when a ref value changes, components don't automatically rerender. 
        This is an important concept to understand when optimizing React performance.
      </p>
      
      <RerenderMyth />
      
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  )
}

export default RerenderMyth



