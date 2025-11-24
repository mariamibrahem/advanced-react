import { Link } from 'react-router-dom'
import MemoizingPropsDemo from '../tutorials/memoizing-props/MemoizingPropsDemo'
import '../App.css'

function MemoizingProps() {
  return (
    <div className="tutorial-page">
      <h1>Memoizing Props Anti-Pattern</h1>
      <p className="tutorial-intro">
        This tutorial demonstrates why memoizing props <strong>inside</strong> a child component 
        is an anti-pattern. When you try to use <code>useMemo</code> or <code>useCallback</code> 
        inside a child component to prevent rerenders, it doesn't work because the component 
        has already rerendered by the time those hooks run. The correct approach is to memoize 
        props in the parent component or use <code>React.memo</code> on the child component itself.
      </p>
      
      <MemoizingPropsDemo />
      
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  )
}

export default MemoizingProps

