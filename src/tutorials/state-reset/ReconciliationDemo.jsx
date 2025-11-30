import { useState } from 'react'

// This demonstrates React's reconciliation algorithm
// When the component type stays the same, React reuses the same instance
// and just rerenders it (updates props), rather than unmounting and remounting
function ReconciliationDemo() {
    const [clicked, setClicked] = useState(false)
  return (
    <div className="example-container">
      <h2>Reconciliation & Diffing</h2>

      <div className="reconciliation-demo">
        <button 
          className="open-modal-btn"
          onClick={() => setClicked(!clicked)}
        >
          Change Input Type
        </button>
        <p className="note-text">input type: {clicked ? 'text' : 'email'}</p>

        <div className="input-wrapper">
          {/* {clicked ? (
            <input
              type="text"
              placeholder="Enter your name..."
              className="demo-input"
              key={"123"}
            />
          ) : (
            <input
              type="text"
              placeholder="Type your email..."
              className="demo-input"
              key="12"
            />
          )} */}


          {/* ///solution */}
          {clicked ?  <input
              type="text"
              placeholder="Enter your name..."
              className="demo-input"
            />:null}
            
             {!clicked ?  <input
              type="text"
              placeholder="Type your email..."
              className="demo-input"
            />:null}
          {
            clicked ? <p className="note-text">is clicked</p> : undefined
          }
        </div>
      </div>

      <div className="explanation">
        <h4>Key Points:</h4>
        <ul>
          <li>Both inputs are the same type (`&lt;input&gt;`) - React recognizes this</li>
          <li>React reuses the same DOM element (same ref reference)</li>
          <li>Only the placeholder attribute is updated - no unmount/remount</li>
          <li>If we changed the element type (e.g., `&lt;input&gt;` to `&lt;textarea&gt;`), React would unmount and remount</li>
          <li>This is React's reconciliation algorithm in action!</li>
        </ul>
      </div>
    </div>
  )
}

export default ReconciliationDemo

