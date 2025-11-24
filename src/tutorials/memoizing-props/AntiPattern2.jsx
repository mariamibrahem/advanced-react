import { memo } from 'react'
import ParentDemo from './ParentDemo'
import ChildComponent from './ChildComponent'

const MemoizedChild = memo(ChildComponent)

function AntiPattern2() {
  return (
    <ParentDemo
      title="❌ Anti-Pattern: React.memo Without Memoized Props"
      description="Using React.memo on child but not memoizing props in parent. New objects/functions are created on every render, so React.memo can't prevent rerenders."
      memoizeProps={false}
      ChildComponent={MemoizedChild}
      childTitle="❌ Child Component (React.memo but props not memoized)"
      childMessage="⚠️ Rerenders every time parent rerenders because props are recreated"
      childBorderColor="#dc3545"
    />
  )
}

export default AntiPattern2

