import { memo } from 'react'
import ParentDemo from './ParentDemo'
import ChildComponent from './ChildComponent'

const MemoizedChild = memo(ChildComponent)

function CorrectApproach() {
  return (
    <ParentDemo
      title="✅ Correct: React.memo + Memoized Props"
      description="Use React.memo on the child and memoize props in the parent."
      memoizeProps={true}
      ChildComponent={MemoizedChild}
      childTitle="✅ Child Component (Correct Approach)"
      childMessage="✅ Only rerenders when props change"
      childBorderColor="#28a745"
    />
  )
}

export default CorrectApproach

