import { Link } from 'react-router-dom'
import DynamicListsDemo from '../tutorials/dynamic-lists-keys/DynamicListsDemo'
import '../App.css'

function DynamicListsKeys() {
  return (
    <div className="tutorial-page">
      <h1>Dynamic Lists & Keys</h1>
      <p className="tutorial-intro">
        This tutorial demonstrates the importance of using <strong>keys</strong> in React lists.
        Learn why keys are essential, why using index as a key is problematic, and how unique IDs solve the problem.
      </p>
      
      <DynamicListsDemo />
      
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  )
}

export default DynamicListsKeys




