import { useState, useEffect } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";
import { Analytics } from "@vercel/analytics/react";

const myCards = [
	{ src: "/img/go.png", matched: false },
	{ src: "/img/js.png", matched: false },
	{ src: "/img/php.png", matched: false },
	{ src: "/img/python.png", matched: false },
	{ src: "/img/react.png", matched: false },
	{ src: "/img/rust.png", matched: false },
];

function App() {
	const [cards, setCards] = useState([]);
	const [flipped, setFlipped] = useState(0);
	const [first, setFirstChoice] = useState(null);
	const [second, setSecondChoice] = useState(null);
	const [disabled, setDisabled] = useState(false);

	// shuffle cards
	const shuffle = () => {
		const shuffled = [...myCards, ...myCards]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		setFirstChoice(null);
		setSecondChoice(null);
		setCards(shuffled);
		setFlipped(0);
	};

	// handle a card click choice
	const handleChoice = (card) => {
		first ? setSecondChoice(card) : setFirstChoice(card);
	};

	// compare choices of the 2 selected cards
	useEffect(() => {
		// const resetTurn = () => {
		//   setFirst(null);
		//   setSecond(null);
		// };
		if (first && second) {
			setDisabled(true);
			if (first.src === second.src) {
				setCards((prevCards) =>
					prevCards.map((card) =>
						// { if (card.src === first.src) {
						//   return {...card, matched: true}
						// } else {
						//   return card
						// }}
						card.src === first.src ? { ...card, matched: true } : card,
					),
				);
				// resetTurn()
				setTimeout(resetTurn, 500);
			} else {
				// resetTurn()
				setTimeout(resetTurn, 500);
			}
		}
	}, [first, second]);

	// reset choices and increase number of turns
	const resetTurn = () => {
		setFirstChoice(null);
		setSecondChoice(null);
		setFlipped((prevFlip) => prevFlip + 1);
		setDisabled(false);
	};

	// Start the game automatically
	useEffect(() => {
		shuffle();
	}, []);

	return (
		<div className="App">
			<h1>Mind Match</h1>
			<button onClick={shuffle}>New Game</button>
			<div className="card___grid">
				{cards.map((card) => (
					<SingleCard
						key={card.id}
						card={card}
						handleChoice={handleChoice}
						flipped={card === first || card === second || card.matched}
						disabled={disabled}
					/>
				))}
			</div>
			<p>
				<strong>
					No. of Turns: <span className="no___turns">{flipped}</span>
				</strong>
			</p>
		</div>
	);
}

export default App;
