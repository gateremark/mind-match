import { useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

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
  const [first, setFirstChoice] = useState(null)
  const [second, setSecondChoice] = useState(null)

  // shuffle cards
  const shuffle = () => {
    const shuffled = [...myCards, ...myCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))
  
    setCards(shuffled)
    setFlipped(0)
  }

  // handle a card click choice
  const handleChoice = (card) => {
    first ? setSecondChoice(card) : setFirstChoice(card)
  }

  // reset choices and increase number of turns
  const resetTurn = () => {
    setFirstChoice(null)
    setSecondChoice(null)
    setFlipped(prevFlip => prevFlip + 1)
  }
  
  return (
    <div className="App">
      <h1>Mind Match</h1>
      <button onClick={shuffle}>New Game</button>
      <div className='card___grid'>
        {cards.map((card) => (
          <SingleCard 
            key={card.id} 
            card={card}
            handleChoice={handleChoice}
          />
        ))}
      </div>
    </div>
  )
}

export default App
