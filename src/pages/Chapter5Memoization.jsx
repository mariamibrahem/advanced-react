import { Link } from 'react-router-dom'
import '../App.css'

function Chapter5Memoization() {
  return (
    <div className="tutorial-page">
      <h1>Chapter 5: Memoization</h1>
      <p className="tutorial-intro">
        Learn about memoization techniques in React.
      </p>
      
      <div className="tutorial-buttons">
        <Link to="/tut6" className="tutorial-button">
          Memoizing Props Anti-Pattern
        </Link>
      </div>
      
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  )
}

export default Chapter5Memoization

