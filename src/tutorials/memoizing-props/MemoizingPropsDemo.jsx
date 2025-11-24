import { useState } from 'react'
import AntiPattern from './AntiPattern'
import CorrectApproach from './CorrectApproach'

function MemoizingPropsDemo() {
  const [activeTab, setActiveTab] = useState('anti-pattern')

  return (
    <div className="example-container">
      <h2>Memoizing Props Anti-Pattern</h2>
      <p className="description">
        This tutorial demonstrates why memoizing props <strong>inside</strong> a child component 
        is an anti-pattern that doesn't prevent rerenders.
      </p>
      
      <div className="tabs-container">
        <div className="tabs-header">
          <button
            className={`tab-button ${activeTab === 'anti-pattern' ? 'active' : ''}`}
            onClick={() => setActiveTab('anti-pattern')}
          >
            Anti-Pattern ❌
          </button>
          <button
            className={`tab-button ${activeTab === 'correct' ? 'active' : ''}`}
            onClick={() => setActiveTab('correct')}
          >
            Correct Approach ✅
          </button>
        </div>
        
        <div className="tabs-content">
          {activeTab === 'anti-pattern' && <AntiPattern />}
          {activeTab === 'correct' && <CorrectApproach />}
        </div>
      </div>
    </div>
  )
}

export default MemoizingPropsDemo

