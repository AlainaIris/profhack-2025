import React, { useState } from 'react';
import './Blackjack.css';
import { shuffleDeck, dealCard, calculateScore } from './cards';

function Blackjack() {
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [deck, setDeck] = useState(shuffleDeck());
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');

  const startGame = () => {
    const newDeck = shuffleDeck();
    setDeck(newDeck);
    setPlayerHand([dealCard(newDeck), dealCard(newDeck)]);
    setDealerHand([dealCard(newDeck), dealCard(newDeck)]);
    setGameOver(false);
    setMessage('');
    setPlayerScore(calculateScore(playerHand));
    setDealerScore(calculateScore(dealerHand));
  };

  const hit = () => {
    if (gameOver) return;
    const newCard = dealCard(deck);
    const newPlayerHand = [...playerHand, newCard];
    setPlayerHand(newPlayerHand);
    setPlayerScore(calculateScore(newPlayerHand));
    if (playerScore > 21) {
      setMessage('You bust! Dealer wins.');
      setGameOver(true);
    }
  };

  const stand = () => {
    if (gameOver) return;
    let newDealerHand = [...dealerHand];
    let newDealerScore = dealerScore;

    // Dealer logic
    while (newDealerScore < 17) {
      const newCard = dealCard(deck);
      newDealerHand = [...newDealerHand, newCard];
      newDealerScore = calculateScore(newDealerHand);
    }

    setDealerHand(newDealerHand);
    setDealerScore(newDealerScore);

    if (newDealerScore > 21 || playerScore > newDealerScore) {
      setMessage('You win!');
    } else if (playerScore === newDealerScore) {
      setMessage('It\'s a draw!');
    } else {
      setMessage('Dealer wins!');
    }

    setGameOver(true);
  };

  return (
    <div className="blackjack-container">
      <h1>Blackjack</h1>
      <div className="hands">
        <div className="player-hand">
          <h2>Player's Hand</h2>
          {playerHand.map((card, index) => (
            <img key={index} src={`./PNG-cards-1.3/${card}.png`} alt={card} />
          ))}
          <p>Score: {playerScore}</p>
        </div>
        <div className="dealer-hand">
          <h2>Dealer's Hand</h2>
          {dealerHand.map((card, index) => (
            <img key={index} src={`./PNG-cards-1.3/${card}.png`} alt={card} />
          ))}
          <p>Score: {dealerScore}</p>
        </div>
      </div>
      <div className="actions">
        <button onClick={hit} disabled={gameOver}>Hit</button>
        <button onClick={stand} disabled={gameOver}>Stand</button>
        {gameOver && <button onClick={startGame}>Restart Game</button>}
      </div>
      <p>{message}</p>
    </div>
  );
}

export default Blackjack;
