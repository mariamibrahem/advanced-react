import { useState } from 'react'
import { Link } from 'react-router-dom'
import functionalHoistingImage from '../assets/functionalHoisting.png'
import functionalHoistingAfterImage from '../assets/functionalHoistingAfter.png'
import '../App.css'

function FunctionalHoisting() {
  const [showAfterHoisting, setShowAfterHoisting] = useState(false)
  const runCode = () => {
    // Execute the code
    const x = "declared outside function"

    exampleFunction()

    function exampleFunction() {
      console.log("Inside function")
      console.log(x)
    }

    console.log("Outside function")
    console.log(x)
  }

  return (
    <div className="tutorial-page">
      <h1>Functional Hoisting</h1>
      <p className="tutorial-intro">
        Learn about functional hoisting in JavaScript.
      </p>
      <div className="note" style={{ marginBottom: '2rem' }}>
        <strong>Note:</strong> Functional hoisting is fully hoisted - both the function name and body are hoisted to the top of their scope.
      </div>
      
      <div className="code-example">
        <h3>Example Code:</h3>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', justifyContent: 'center' }}>
          <button 
            onClick={() => setShowAfterHoisting(false)} 
            className={`tab-button ${!showAfterHoisting ? 'active' : ''}`}
          >
            Original Code
          </button>
          <button 
            onClick={() => setShowAfterHoisting(true)} 
            className={`tab-button ${showAfterHoisting ? 'active' : ''}`}
          >
            How JavaScript Handles It
          </button>
        </div>
        <div className="code-image-container">
          <img 
            src={showAfterHoisting ? functionalHoistingAfterImage : functionalHoistingImage} 
            alt={showAfterHoisting ? "How JavaScript handles functional hoisting" : "Functional hoisting code example"} 
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

export default FunctionalHoisting

