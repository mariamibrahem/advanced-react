import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MovingStateDown from './pages/MovingStateDown'
import RerenderMyth from './pages/RerenderMyth'
import ChildrenPropComposition from './pages/ChildrenPropComposition'
import StateReset from './pages/StateReset'
import DynamicListsKeys from './pages/DynamicListsKeys'
import MemoizingProps from './pages/MemoizingProps'
import Chapter1IntroToRendering from './pages/Chapter1IntroToRendering'
import Chapter2ElementsChildren from './pages/Chapter2ElementsChildren'
import Chapter5Memoization from './pages/Chapter5Memoization'
import Chapter10Closures from './pages/Chapter10Closures'
import Hoisting from './pages/Hoisting'
import LexicalEnvironment from './pages/LexicalEnvironment'
import VariableScopes from './pages/VariableScopes'
import Var from './pages/Var'
import FunctionalHoisting from './pages/FunctionalHoisting'
import VariableHoisting from './pages/VariableHoisting'
import TDZ from './pages/TDZ'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chapter1" element={<Chapter1IntroToRendering />} />
      <Route path="/chapter2" element={<Chapter2ElementsChildren />} />
      <Route path="/chapter5" element={<Chapter5Memoization />} />
      <Route path="/tut1" element={<MovingStateDown />} />
      <Route path="/tut2" element={<RerenderMyth />} />
      <Route path="/tut3" element={<ChildrenPropComposition />} />
      <Route path="/tut4" element={<StateReset />} />
      <Route path="/tut5" element={<DynamicListsKeys />} />
      <Route path="/tut6" element={<MemoizingProps />} />
      <Route path="/chapter10" element={<Chapter10Closures />} />
      <Route path="/chapter10/hoisting" element={<Hoisting />} />
      <Route path="/chapter10/lexical-environment" element={<LexicalEnvironment />} />
      <Route path="/chapter10/variable-scopes" element={<VariableScopes />} />
      <Route path="/chapter10/var" element={<Var />} />
      <Route path="/chapter10/hoisting/functional-hoisting" element={<FunctionalHoisting />} />
      <Route path="/chapter10/hoisting/variable-hoisting" element={<VariableHoisting />} />
      <Route path="/chapter10/hoisting/tdz" element={<TDZ />} />
    </Routes>
  )
}

export default App
