import { Link } from 'react-router-dom'
import '../App.css'
import { createElement } from 'react'

function Home() {
  console.log(createElement('h1', null, 'Advanced React Concepts'))
  return (
    <div className="home-container">
      {/* <h1>Advanced React Concepts</h1> */}
      {createElement('h1', null, 'Advanced React Concepts')}
      {console.log(<p>Hello</p>)}

      <div className="tutorial-buttons">
        <Link to="/chapter1" className="tutorial-button">
          Chapter 1: Intro to Rendering
        </Link>
        <Link to="/chapter2" className="tutorial-button">
          Chapter 2 & 6: Elements, children as props, re-renders, and Diffing & Reconciliation
        </Link>
        <Link to="/chapter5" className="tutorial-button">
          Chapter 5: Memoization
        </Link>
        <Link to="/chapter10" className="tutorial-button">
          Chapter 10: Closures
        </Link>
      </div>
    </div>
  )
}

export default Home

