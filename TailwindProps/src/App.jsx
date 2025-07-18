import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "Riaz",
    age: 30,
    city: "Karachi",
  }

  return (
    <>
      <h1 className='bg-yellow-400 text-black p-4 rounded-xl'>TailWind Test</h1>
      <Card userName="Riaz" btnText="visit me"/>
      <Card userName="Najeeb" btnText="Click me"/>
      <Card/>

    </>
  )
}

export default App
