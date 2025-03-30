import React, { useState, useEffect } from 'react';
import './Blackjack.css';
import { shuffleDeck, dealCard, calculateScore } from './cards';
import BetMenu from './BetMenu'
import {
        WIN_1,WIN_2,WIN_3,LOSE_1,LOSE_2,LOSE_3,WINNING_STREAK_1,WINNING_STREAK_2,WINNING_STREAK_3,LOSING_STREAK_1,LOSING_STREAK_2,LOSING_STREAK_3
} from './text'


function Blackjack({wallet, setWallet, streak, setStreak, pSetters}) {
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


        function textSet(streakI) {
                let text;
                if (streakI == 1) {
                        text = randWin();
                } else if (streakI == 2) {
                        text = WINNING_STREAK_1;
                } else if (streakI == 3) {
                        text = WINNING_STREAK_2;
                } else if (streakI > 3) {
                        text = WINNING_STREAK_3;
                } else if (streakI == -1) {
                        text = randLose();
                } else if (streakI == -2) {
                        text = LOSING_STREAK_1;
                } else if (streakI == -3) {
                        text = LOSING_STREAK_2;
                } else {
                        text = LOSING_STREAK_3;
                }
                console.log(1);
                pSetters[0](text);
        }

	        function randWin() {
                let wins = [WIN_1, WIN_2, WIN_3];
                return wins[Math.floor(Math.random() * 3)];
        }

        function randLose() {
                let losses = [LOSE_1, LOSE_2, LOSE_3];
                return losses[Math.floor(Math.random() * 3)];
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
                let streakNew;
                if (streak > 0) {
                streakNew = streak + 1;
                } else {
                streakNew = 1;
                }
                setStreak(streakNew);
                textSet(streakNew);
                setWallet(wallet + bet);
        }

        function loseMoney() {
                let streakNew;
                if (streak >= 0) {
                streakNew = -1;
                } else {
                streakNew = streak - 1
                }
                setStreak(streakNew);
                setWallet(wallet - bet);
                textSet(streakNew);
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

			<p>{message}</p> </> : <BetMenu setBet={enterBet} wallet={wallet} pSetters={pSetters}/>}
		</div>
		</div>
	);
}

export default Blackjack;
