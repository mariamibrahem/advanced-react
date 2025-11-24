import { useState } from 'react'
import HeavyComponent from './HeavyComponent'
import Modal from './Modal'

// AFTER: State is passed down to a child component (ModalWrapper)
// The state lives in ModalWrapper, not in the parent After component
// When state changes, only ModalWrapper rerenders, not the parent
// Since HeavyComponent is a sibling, it doesn't rerender when ModalWrapper's state changes
// This allows the modal to appear instantly
function After() {
  return (
    <div className="example-container">
      <h2>After: State Passed Down (Solution)</h2>
      <p className="description">
        Click the button below. The modal appears instantly because the state is managed
        in ModalWrapper (a child component), not in the parent. When the state changes,
        only ModalWrapper rerenders, not the parent or HeavyComponent (its sibling).
      </p>
      
      <ModalWrapper />

      <HeavyComponent />
    </div>
  )
}

// State is "passed down" to this component
// When this component's state changes, it doesn't cause the parent (After) to rerender
// Therefore, HeavyComponent (which is a sibling) won't rerender either
function ModalWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button 
        className="open-modal-btn"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>Modal Content</h3>
        <p>This modal appears instantly because the HeavyComponent doesn't rerender!</p>
      </Modal>
    </>
  )
}

export default After

