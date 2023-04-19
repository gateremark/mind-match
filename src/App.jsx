import { useState } from 'react'
import './App.css'

const myCards = [
  { "src": "/img/go.png"},
  { "src": "/img/js.png"},
  { "src": "/img/php.png"},
  { "src": "/img/python.png"},
  { "src": "/img/react.png"},
  { "src": "/img/rust.png"}
]

function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState(0)

  // shuffle cards
  const shuffle = () => {
    const shuffled = [...myCards, ...myCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))
  
    setCards(shuffled)
    setFlipped(0)
  }

  console.log(cards, flipped)

  return (
    <div className="App">
      <h1>Mind Match</h1>
      <button onClick={shuffle}>New Game</button>
      <div className='card___grid'>
        {cards.map((card) => (
          <div className='card' key={card.id}>
            <div>
                <img className='front' src={card.src} alt="Card Front" />
                <img className='back' src="/img/cover.png" alt="Card Back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
