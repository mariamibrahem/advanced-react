import { useState } from 'react'
import AntiPattern from './AntiPattern'
import AntiPattern2 from './AntiPattern2'
import CorrectApproach from './CorrectApproach'
import CorrectApproach2 from './CorrectApproach2'

function MemoizingPropsDemo() {
  const [activeTab, setActiveTab] = useState('anti-pattern-1')

  return (
    <div className="example-container">
      <div className="tabs-container">
        <div className="tabs-header">
          <button
            className={`tab-button ${activeTab === 'anti-pattern-1' ? 'active' : ''}`}
            onClick={() => setActiveTab('anti-pattern-1')}
          >
            Anti-Pattern 1 ❌
          </button>
          <button
            className={`tab-button ${activeTab === 'anti-pattern-2' ? 'active' : ''}`}
            onClick={() => setActiveTab('anti-pattern-2')}
          >
            Anti-Pattern 2 ❌
          </button>
          <button
            className={`tab-button ${activeTab === 'correct' ? 'active' : ''}`}
            onClick={() => setActiveTab('correct')}
          >
            Correct ✅
          </button>
          <button
            className={`tab-button ${activeTab === 'correct-2' ? 'active' : ''}`}
            onClick={() => setActiveTab('correct-2')}
          >
            Correct 2 ✅
          </button>
        </div>
        
        <div className="tabs-content">
          {activeTab === 'anti-pattern-1' && <AntiPattern />}
          {activeTab === 'anti-pattern-2' && <AntiPattern2 />}
          {activeTab === 'correct' && <CorrectApproach />}
          {activeTab === 'correct-2' && <CorrectApproach2 />}
        </div>
      </div>
    </div>
  )
}

export default MemoizingPropsDemo

