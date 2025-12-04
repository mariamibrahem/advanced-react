import { Link } from 'react-router-dom'
import '../App.css'

function VariableScopes() {
  return (
    <div className="tutorial-page">
      <h1>Variable Scopes</h1>
      <p className="tutorial-intro">
        Learn about variable scopes in JavaScript.
      </p>
      
      <Link to="/chapter10" className="back-button">
        ← Back to Chapter 10
      </Link>
    </div>
  )
}

export default VariableScopes

