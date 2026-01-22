
import './App.css'
import { Counter } from './components/counter'
import { useContext } from 'react'
import { CounterContext } from './context/counterContext'

function App() {
const context = useContext(CounterContext)
  return (
    <>
    <h2>Count is {context.count}</h2>
     <Counter/>
     <Counter/>
     <Counter/>
    </>
  )
}

export default App
