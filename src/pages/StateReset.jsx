import { Link } from 'react-router-dom'
import ReconciliationDemo from '../tutorials/state-reset/ReconciliationDemo'
import '../App.css'

function StateReset() {
  return (
    <div className="tutorial-page">
      <h1>State Reset</h1>
      <p className="tutorial-intro">
        This tutorial demonstrates how React's <strong>reconciliation algorithm</strong> works.
        React uses component type to determine if it should reuse an existing component instance
        or create a new one. When the component type stays the same, React rerenders the same
        instance rather than unmounting and remounting.
      </p>
      
      <ReconciliationDemo />
      
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  )
}

export default StateReset



