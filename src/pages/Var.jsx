import { Link } from 'react-router-dom'
import '../App.css'

function Var() {

  return (
    <div className="tutorial-page">
      <h1>Var</h1>
      <p className="tutorial-intro">
        Learn about the var keyword in JavaScript.
      </p>
      
      <div className="code-example"> 
        <div className="note" style={{ marginTop: '1rem' }}>
          <strong>Note:</strong> JavaScript doesn't declare many variables with the same name - only once. When you redeclare a variable with <code>var</code>, JavaScript ignores the redeclaration and only reassigns the value to the existing variable name.
        </div>
      </div>
      
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Resources:</h3>
        <div className="tutorial-buttons">
          <a 
            href="https://javascript.info/var#var-has-no-block-scope" 
            target="_blank" 
            rel="noopener noreferrer"
            className="tutorial-button"
          >
            "var" has no block scope
          </a>
          <a 
            href="https://javascript.info/var#var-tolerates-redeclarations" 
            target="_blank" 
            rel="noopener noreferrer"
            className="tutorial-button"
          >
            "var" tolerates redeclarations
          </a>
          <a 
            href="https://javascript.info/var#var-variables-can-be-declared-below-their-use" 
            target="_blank" 
            rel="noopener noreferrer"
            className="tutorial-button"
          >
            "var" variables can be declared below their use
          </a>
        </div>
      </div>
      
      <Link to="/chapter10" className="back-button">
        ← Back to Chapter 10
      </Link>
    </div>
  )
}

export default Var

