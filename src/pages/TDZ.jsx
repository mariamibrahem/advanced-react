import { Link } from 'react-router-dom'
import tdzImage from '../assets/TDZ.png'
import '../App.css'

function TDZ() {
  const runCode = () => {
    // Execute the code
    const x = 1
    {
      console.log(x)
      const x = 2
    }
  }

  return (
    <div className="tutorial-page">
      <h1>Temporal Dead Zone</h1>
      <p className="tutorial-intro">
        Learn about the Temporal Dead Zone (TDZ) in JavaScript.
      </p>
      
      <div className="code-example">
        <h3>Example Code:</h3>
        <div className="code-image-container">
          <img 
            src={tdzImage} 
            alt="Temporal Dead Zone code example" 
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

export default TDZ


