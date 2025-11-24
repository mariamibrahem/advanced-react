import { useState } from 'react'

// List item component that tracks renders
function ListItem({ item, index, keyType, onRemove }) {
  const [inputValue, setInputValue] = useState('')
  
  return (
    <div className="list-item" style={{ 
      padding: '10px', 
      margin: '5px', 
      border: '1px solid #ccc',
      backgroundColor: '#f9f9f9'
    }}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold' }}>{item.name}</span>
        <span>${item.price.toFixed(2)}</span>
        {keyType && (
          <span style={{ 
            fontSize: '12px', 
            color: '#666',
            marginLeft: 'auto'
          }}>
            Key: {keyType === 'index' ? index : item.id}
          </span>
        )}
        {onRemove && (
          <button
            onClick={() => onRemove(item.id)}
            style={{
              padding: '5px 10px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            Remove
          </button>
        )}
      </div>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ 
          marginTop: '5px', 
          width: '100%',
          padding: '5px'
        }}
      />
    </div>
  )
}

export default ListItem

