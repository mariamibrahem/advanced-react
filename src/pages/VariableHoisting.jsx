import { Link } from 'react-router-dom'
import variableHoistingImage from '../assets/variableHoisting.png'
import '../App.css'

function VariableHoisting() {
  const runCode = () => {
    // Execute the code
    const mariam = false;
    if (mariam) 
    {
      var x = 1
    }
    console.log(x) // 1
  }

  return (
    <div className="tutorial-page">
      <h1>Variable Hoisting</h1>
      <p className="tutorial-intro">
        Learn about variable hoisting in JavaScript.
      </p>
      <div className="note" style={{ marginBottom: '2rem' }}>
        <strong>Note:</strong> Variables declared with <code>var</code> are hoisted to the top of their scope, but they are initialized with <code>undefined</code> until the assignment is reached.
      </div>
      
      <div className="code-example">
        <h3>Example Code:</h3>
        <div className="code-image-container">
          <img 
            src={variableHoistingImage} 
            alt="Variable hoisting code example" 
            className="code-image"
          />
        </div>
        <button onClick={runCode} className="run-button">
          Run Code
        </button>
        <p style={{ marginTop: '1rem', color: '#666', fontSize: '0.9rem' }}>
          Check the browser console to see the output.
        </p>
      </div>
      
      <Link to="/chapter10/hoisting" className="back-button">
        ← Back to Hoisting
      </Link>
    </div>
  )
}

export default VariableHoisting

