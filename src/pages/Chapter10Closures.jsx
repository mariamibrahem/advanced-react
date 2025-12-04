import { Link } from 'react-router-dom'
import '../App.css'

function Chapter10Closures() {
  return (
    <div className="tutorial-page">
      <h1>Chapter 10: Closures</h1>
      <p className="tutorial-intro">
        Explore JavaScript closures and related concepts.
      </p>
      
      <div className="tutorial-buttons">
        <Link to="/chapter10/hoisting" className="tutorial-button">
          Hoisting
        </Link>
        <Link to="/chapter10/lexical-environment" className="tutorial-button">
          Lexical Environment
        </Link>
        <Link to="/chapter10/variable-scopes" className="tutorial-button">
          Variable Scopes
        </Link>
      </div>
      
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  )
}

export default Chapter10Closures

