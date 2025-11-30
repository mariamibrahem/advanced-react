import { useState } from 'react'
import { Link } from 'react-router-dom'
import StateBasedScroll from '../tutorials/children-prop-composition/StateBasedScroll'
import ChildrenPropScroll from '../tutorials/children-prop-composition/ChildrenPropScroll'
import '../App.css'

function Tut3() {
  const [activeTab, setActiveTab] = useState('without')

  return (
    <div className="tutorial-page">
      <h1>Tutorial 3: Children Prop Pattern for Performance</h1>
      <p className="tutorial-intro">
        This tutorial demonstrates how using the <strong>children prop pattern</strong> can prevent
        unnecessary rerenders of heavy components. When a component rerenders, React optimizes by
        not rerendering children if the children prop reference hasn't changed.
      </p>
      
      <div className="tabs-container">
        <div className="tabs-header">
          <button
            className={`tab-button ${activeTab === 'without' ? 'active' : ''}`}
            onClick={() => setActiveTab('without')}
          >
           Before
          </button>
          <button
            className={`tab-button ${activeTab === 'with' ? 'active' : ''}`}
            onClick={() => setActiveTab('with')}
          >
          After
          </button>
        </div>
        
        <div className="tabs-content">
          {activeTab === 'without' && <StateBasedScroll />}
          {activeTab === 'with' && <ChildrenPropScroll />}
        </div>
      </div>
      
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
    </div>
  )
}

export default Tut3

