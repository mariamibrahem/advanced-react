import { Link } from 'react-router-dom'
import '../App.css'

function Home() {
  return (
    <div className="home-container">
      <h1>Advanced React Concepts</h1>
      <div className="tutorial-buttons">
        <Link to="/tut1" className="tutorial-button">
          Moving State Down
        </Link>
        <Link to="/tut2" className="tutorial-button">
          Rerender Myth
        </Link>
        <Link to="/tut3" className="tutorial-button">
        Children Prop Pattern for Performance
        </Link>
        <Link to="/tut4" className="tutorial-button">
          State Reset
        </Link>
        <Link to="/tut5" className="tutorial-button">
          Dynamic Lists & Keys
        </Link>
        <Link to="/tut6" className="tutorial-button">
          Memoizing Props Anti-Pattern
        </Link>
      </div>
    </div>
  )
}

export default Home

