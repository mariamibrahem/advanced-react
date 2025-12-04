import { Link } from 'react-router-dom'
import '../App.css'

function LexicalEnvironment() {
  return (
    <div className="tutorial-page">
      <h1>Lexical Environment</h1>
      <p className="tutorial-intro">
        Learn about lexical environment in JavaScript.
      </p>
      
      <Link to="/chapter10" className="back-button">
        ← Back to Chapter 10
      </Link>
    </div>
  )
}

export default LexicalEnvironment

