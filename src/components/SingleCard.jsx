import './SingleCard.css'

const SingleCard = ({card, handleChoice}) => {

    const handleClick = () => {
        handleChoice(card)
    }

  return (
    <div className='card'>
        <div>
            <img className='front' src={card.src} alt="Card Front" />
            <img 
              className='back' 
              src="/img/cover.png" 
              onClick={handleClick} 
              alt="Card Back" />
        </div>
    </div>
  )
}

export default SingleCard

