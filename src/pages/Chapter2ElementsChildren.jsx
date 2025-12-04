import { Link } from 'react-router-dom'
import '../App.css'

function Chapter2ElementsChildren() {
  return (
    <div className="tutorial-page">
      <h1>Chapter 2 & 6: Elements, children as props, re-renders, and Diffing & Reconciliation</h1>
      <p className="tutorial-intro">
        Learn about React elements, children props, re-renders, and React's diffing algorithm and reconciliation process.
      </p>
      
      <div className="tutorial-buttons">
        <Link to="/tut3" className="tutorial-button">
          Children Prop Pattern for Performance
        </Link>
        <Link to="/tut4" className="tutorial-button">
          State Reset
        </Link>
        <Link to="/tut5" className="tutorial-button">
          Dynamic Lists & Keys
        </Link>
      </div>
      
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  )
}

export default Chapter2ElementsChildren

