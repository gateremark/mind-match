import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Mind Match</h1>
      <button>New Game</button>
    </div>
  )
}

export default App
