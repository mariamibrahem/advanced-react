import { useState } from 'react'
import { Link } from 'react-router-dom'
import Before from '../tutorials/moving-state-down/Before'
import After from '../tutorials/moving-state-down/After'
import '../App.css'

function MovingStateDown() {
  const [activeTab, setActiveTab] = useState('before')

  return (
    <div className="tutorial-page">
      <h1>Moving State Down</h1>
      <p className="tutorial-intro">
        This tutorial demonstrates how passing state down can
        prevent unnecessary rerenders of heavy components, making modals appear instantly.
      </p>
      
      <div className="tabs-container">
        <div className="tabs-header">
          <button
            className={`tab-button ${activeTab === 'before' ? 'active' : ''}`}
            onClick={() => setActiveTab('before')}
          >
            Before
          </button>
          <button
            className={`tab-button ${activeTab === 'after' ? 'active' : ''}`}
            onClick={() => setActiveTab('after')}
          >
            After
          </button>
        </div>
        
        <div className="tabs-content">
          {activeTab === 'before' && <Before />}
          {activeTab === 'after' && <After />}
        </div>
      </div>
      
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  )
}

export default MovingStateDown

