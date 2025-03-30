import React, { useState, useEffect } from 'react';
import './Blackjack.css';
import { shuffleDeck, dealCard, calculateScore } from './cards';
import BetMenu from './BetMenu'

function Blackjack({wallet, setWallet, streak, setStreak}) {
	const [deck, setDeck] = useState([]);
	const [playerHand, setPlayerHand] = useState([]);
	const [dealerHand, setDealerHand] = useState([]);
	const [playerScore, setPlayerScore] = useState(0);
	const [dealerScore, setDealerScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [betSet, setBetSet] = useState(false);
	const [bet, setBet] = useState(0);

	const [message, setMessage] = useState('');
	const [showDealerCard, setShowDealerCard] = useState(false);

	function enterBet(bet) {
		setBet(parseInt(bet));
		setBetSet(true);
	}


	// 🔥 Initialize the deck and deal hands on first render
	useEffect(() => {
		const newDeck = shuffleDeck();
		setDeck(newDeck);

		// Automatically deal initial hands once the deck is set
		if (newDeck.length >= 4) {
			const playerStartingHand = [dealCard(newDeck), dealCard(newDeck)];
			const dealerStartingHand = [dealCard(newDeck), dealCard(newDeck)];

			setPlayerHand(playerStartingHand);
			setDealerHand(dealerStartingHand);

			setPlayerScore(calculateScore(playerStartingHand));
			setDealerScore(calculateScore([dealerStartingHand[0]]));  // Hide the second card's value
		}
	}, []);

	const startGame = () => {
		const newDeck = shuffleDeck();

		if (newDeck.length >= 4) {
			const playerStartingHand = [dealCard(newDeck), dealCard(newDeck)];
			const dealerStartingHand = [dealCard(newDeck), dealCard(newDeck)];

			setDeck(newDeck);
			setPlayerHand(playerStartingHand);
			setDealerHand(dealerStartingHand);

			setPlayerScore(calculateScore(playerStartingHand));
			setDealerScore(calculateScore([dealerStartingHand[0]]));  // Show only face-up card

			setShowDealerCard(false);
			setGameOver(false);
			setMessage('');
		}
	};

	const hit = () => {
		if (gameOver) return;

		if (deck.length === 0) {
			setMessage("No more cards in the deck!");
			return;
		}

		const newDeck = [...deck];
		const newCard = dealCard(newDeck);

		if (!newCard) {
			setMessage("No more cards in the deck!");
			return;
		}

		const newPlayerHand = [...playerHand, newCard];
		const newScore = calculateScore(newPlayerHand);

		setDeck(newDeck);
		setPlayerHand(newPlayerHand);
		setPlayerScore(newScore);

		if (newScore > 21) {
			setMessage('You bust! Dealer wins.');
			setGameOver(true);
			setShowDealerCard(true);  // Reveal hidden card at end of game
			loseMoney();
		}
	};

	const stand = () => {
		if (gameOver) return;

		setShowDealerCard(true);  // Reveal hidden card

		let newDealerHand = [...dealerHand];
		let newDeck = [...deck];
		let newDealerScore = calculateScore(newDealerHand);

		// Dealer logic: hit until 17 or higher
		while (newDealerScore < 17 && newDeck.length > 0) {
			const newCard = dealCard(newDeck);
			newDealerHand.push(newCard);
			newDealerScore = calculateScore(newDealerHand);
		}

		setDeck(newDeck);
		setDealerHand(newDealerHand);
		setDealerScore(newDealerScore);

		// Determine the winner
		if (newDealerScore > 21 || playerScore > newDealerScore) {
			setMessage('You win!');
			addMoney();
		} else if (playerScore === newDealerScore) {
			setMessage('It\'s a draw!');
		} else {
			setMessage('Dealer wins!');
			loseMoney();
		}

		setGameOver(true);
	};

	function addMoney() {
		if (streak > 0) {
		setStreak(streak + 1)
		} else {
		setStreak(1)
		}
		setWallet(wallet + bet);
	}

	function loseMoney() {
		if (streak > 0) {
		setStreak(-1)
		} else {
		setStreak(streak - 1)
		}
		setWallet(wallet - bet);
	}

	return (
		<div className="blackjack-container">
		<div className="blackjack-wrap">
		<h1>Blackjack</h1>
		{betSet ? <>
			<div className="hands">
			{/* Player's Hand */}
			<div className="player-hand">
			<h2>Player's Hand</h2>
			{playerHand.map((card, index) => (
				<img key={index} src={`./PNG-cards-1.3/${card}.png`} alt={card} />
			))}
			<p>Score: {playerScore}</p>
			</div>

			{/* Dealer's Hand */}
			<div className="dealer-hand">
			<h2>Dealer's Hand</h2>
			{dealerHand.map((card, index) => (
				<img
				key={index}
				src={
					index === 1 && !showDealerCard
					? './PNG-cards-1.3/none_of_hidden.png'  // Hidden card image
					: `./PNG-cards-1.3/${card}.png`
				}
				alt={index === 1 && !showDealerCard ? 'Hidden Card' : card}
				/>
			))}
			<p>Score: {showDealerCard ? dealerScore : '?'}</p>
			</div>
			</div>

			<div className="actions">
			<button onClick={hit} disabled={gameOver}>Hit</button>
			<button onClick={stand} disabled={gameOver}>Stand</button>
			{gameOver && <button onClick={startGame}>Restart Game</button>}
			</div>

			<p>{message}</p> </> : <BetMenu setBet={enterBet} wallet={wallet} />}
		</div>
		</div>
	);
}

export default Blackjack;
