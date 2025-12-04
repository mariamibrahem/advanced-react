import { Link } from 'react-router-dom'
import '../App.css'

function Hoisting() {
  return (
    <div className="tutorial-page">
      <h1>Hoisting</h1>
      <p className="tutorial-intro">
        Learn about different types of hoisting in JavaScript.
      </p>
      
      <div className="tutorial-buttons">
        <Link to="/chapter10/hoisting/functional-hoisting" className="tutorial-button">
          Functional Hoisting
        </Link>
        <Link to="/chapter10/hoisting/variable-hoisting" className="tutorial-button">
          Variable Hoisting
        </Link>
      </div>
      
      <Link to="/chapter10" className="back-button">
        ← Back to Chapter 10
      </Link>
    </div>
  )
}

export default Hoisting

