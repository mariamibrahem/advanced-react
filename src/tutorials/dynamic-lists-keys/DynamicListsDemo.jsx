import { useState } from 'react'
import NoKeyDemo from './NoKeyDemo'
import IndexKeyDemo from './IndexKeyDemo'
import UniqueIdKeyDemo from './UniqueIdKeyDemo'

function DynamicListsDemo() {
  const [activeTab, setActiveTab] = useState('no-key')

  return (
    <div className="example-container">
      <h2>Dynamic Lists & Keys</h2>

      <div className="tabs-container">
        <div className="tabs-header" style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <button
            className={`tab-button ${activeTab === 'no-key' ? 'active' : ''}`}
            onClick={() => setActiveTab('no-key')}
          >
            No Key (Problem)
          </button>
          <button
            className={`tab-button ${activeTab === 'index' ? 'active' : ''}`}
            onClick={() => setActiveTab('index')}
          >
            Index as Key (Still Problematic)
          </button>
          <button
            className={`tab-button ${activeTab === 'id' ? 'active' : ''}`}
            onClick={() => setActiveTab('id')}
          >
            Unique ID as Key (Solution)
          </button>
        </div>

        <div className="tabs-content">
          {activeTab === 'no-key' && <NoKeyDemo />}
          {activeTab === 'index' && <IndexKeyDemo />}
          {activeTab === 'id' && <UniqueIdKeyDemo />}
        </div>
      </div>

      <div className="explanation" style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
        <h4>Key Points:</h4>
        <ul>
          <li><strong>No Key:</strong> React can't differentiate between items when the list order changes. Component state gets mixed up.</li>
          <li><strong>Index as Key:</strong> When items are reordered, the index changes, so React still can't track items correctly.</li>
          <li><strong>Unique ID as Key:</strong> A stable, unique identifier allows React to correctly track each item even when the list is reordered.</li>
          <li><strong>Try it:</strong> Type something in the inputs, then click "Sort by Price" to see the difference!</li>
        </ul>
      </div>
    </div>
  )
}

export default DynamicListsDemo

