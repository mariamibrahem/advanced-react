import { useState } from 'react'
import { initialItems, generateNewItem } from './initialItems'
import ListItem from './ListItem'

function UniqueIdKeyDemo() {
  const [items, setItems] = useState(initialItems)

  const sortByPrice = () => {
    const sorted = [...items].sort((a, b) => a.price - b.price)
    setItems(sorted)
  }

  const reset = () => {
    setItems(initialItems)
  }

  const addItem = () => {
    const newItem = generateNewItem()
    setItems([...items, newItem])
  }

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div>
      <h3>Unique ID as Key - The Solution</h3>
      <p style={{ color: '#28a745', marginBottom: '15px' }}>
        ✅ Using a unique, stable ID as key allows React to correctly track each item. 
        When you sort, add, or remove items, input values stay with their correct items!
      </p>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={sortByPrice}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Sort by Price
        </button>
        <button 
          onClick={addItem}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add Item
        </button>
        <button 
          onClick={reset}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
      </div>

      <div>
        {items.map((item, index) => (
          <ListItem 
            key={item.id} 
            item={item} 
            index={index}
            keyType="id"
            onRemove={removeItem}
          />
        ))}
      </div>
    </div>
  )
}

export default UniqueIdKeyDemo

