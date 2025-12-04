import { Link } from 'react-router-dom'
import '../App.css'

function Chapter1IntroToRendering() {
  return (
    <div className="tutorial-page">
      <h1>Chapter 1: Intro to Rendering</h1>
      <p className="tutorial-intro">
        Learn about React rendering and re-renders.
      </p>
      
      <div className="tutorial-buttons">
        <Link to="/tut1" className="tutorial-button">
          Moving State Down
        </Link>
        <Link to="/tut2" className="tutorial-button">
          Rerender Myth
        </Link>
      </div>
      
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  )
}

export default Chapter1IntroToRendering

