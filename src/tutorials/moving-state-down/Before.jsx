import { useState } from 'react'
import HeavyComponent from './HeavyComponent'
import Modal from './Modal'

// BEFORE: State is in the parent component
// When modal state changes, the entire component tree rerenders
// including the HeavyComponent, causing the modal to appear delayed
function Before() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="example-container">
      <h2>Before: State in Parent (Problem)</h2>
      <p className="description">
        Click the button below. Notice how the modal appears with a delay because
        the HeavyComponent rerenders when the state changes.
      </p>
      
      <button 
        className="open-modal-btn"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>

      <HeavyComponent />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>Modal Content</h3>
        <p>This modal should appear instantly, but it doesn't because the HeavyComponent rerenders first.</p>
      </Modal>
    </div>
  )
}

export default Before

