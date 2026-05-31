import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-black w-full h-full">
    <h1 className="text-center text-3xl text-white"> Learn about redux toolkit</h1>
    </div>
  )
}

export default App
