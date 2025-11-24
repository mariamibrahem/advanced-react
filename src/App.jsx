import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MovingStateDown from './pages/MovingStateDown'
import RerenderMyth from './pages/RerenderMyth'
import ChildrenPropComposition from './pages/ChildrenPropComposition'
import StateReset from './pages/StateReset'
import DynamicListsKeys from './pages/DynamicListsKeys'
import MemoizingProps from './pages/MemoizingProps'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tut1" element={<MovingStateDown />} />
      <Route path="/tut2" element={<RerenderMyth />} />
      <Route path="/tut3" element={<ChildrenPropComposition />} />
      <Route path="/tut4" element={<StateReset />} />
      <Route path="/tut5" element={<DynamicListsKeys />} />
      <Route path="/tut6" element={<MemoizingProps />} />
    </Routes>
  )
}

export default App
