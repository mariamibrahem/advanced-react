// This component simulates a heavy/expensive component
// that takes time to render

function HeavyComponent() {
  // Simulate expensive computation
  const items = Array.from({ length: 100000 }, (_, i) => i)
  
  return (
    <div className="heavy-component">
      <h3>Heavy Component</h3>
      <p>This component renders {items.length.toLocaleString()} items</p>
      <div className="heavy-list">
        {items.map((item) => (
          <div key={item} className="heavy-item">
            Item {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeavyComponent



