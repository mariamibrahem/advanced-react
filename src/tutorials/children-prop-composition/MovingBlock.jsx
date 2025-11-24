// Component that moves based on position prop
function MovingBlock({ position }) {
  return (
    <div 
      className="moving-block"
      style={{
        transform: `translateY(${position}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      <div className="block-content">
        Position: {position}px
      </div>
    </div>
  )
}

export default MovingBlock

