import { Link } from 'react-router-dom'
import MemoizingPropsDemo from '../tutorials/memoizing-props/MemoizingPropsDemo'
import '../App.css'

function MemoizingProps() {
  return (
    <div className="tutorial-page">
      <h1>Memoizing Props Anti-Pattern</h1>
      <p className="tutorial-intro">
        Memoizing props in the parent before passing to child doesn't prevent rerenders. 
        You need <code>React.memo</code> on the child component.
      </p>
      
      <MemoizingPropsDemo />
      
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  )
}

export default MemoizingProps

