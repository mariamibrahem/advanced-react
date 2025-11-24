import ParentDemo from './ParentDemo'
import ChildComponent from './ChildComponent'

function AntiPattern() {
  return (
    <ParentDemo
      title="❌ Anti-Pattern: Memoizing Props in Parent"
      description="Memoizing props in parent doesn't prevent child rerenders without React.memo."
      memoizeProps={true}
      ChildComponent={ChildComponent}
      childTitle="❌ Child Component (No React.memo)"
      childMessage="⚠️ Rerenders every time parent rerenders, even with memoized props"
      childBorderColor="#dc3545"
    />
  )
}

export default AntiPattern

