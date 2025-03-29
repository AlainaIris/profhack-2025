import React, { useState } from 'react';
import { cardDeck, shuffleDeck, dealCard, mapCardToImage } from './cards';
import './Blackjack.css';

export default function Blackjack() {
  const [deck, setDeck] = useState(shuffleDeck(cardDeck));
  const [playerHand, setPlayerHand] = useState([dealCard(deck), dealCard(deck)]);
  const [dealerHand, setDealerHand] = useState([dealCard(deck)]);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState('');

  const calculateScore = (hand) => {
    let score = 0;
    let aceCount = 0;
    hand.forEach(card => {
      let value = card.slice(1);
      if (['J', 'Q', 'K'].includes(value)) value = 10;
      else if (value === 'A') {
        value = 11;
        aceCount++;
      } else value = parseInt(value);
      score += value;
    });

    while (score > 21 && aceCount > 0) {
      score -= 10;
      aceCount--;
    }
    return score;
  };

  const hit = () => {
    if (gameOver) return;
    const newCard = dealCard(deck);
    const newHand = [...playerHand, newCard];
    setPlayerHand(newHand);
    setDeck(deck);

    if (calculateScore(newHand) > 21) {
      setGameOver(true);
      setWinner('Dealer Wins!');
    }
  };

  const stand = () => {
    if (gameOver) return;
    let dealerNewHand = [...dealerHand];

    while (calculateScore(dealerNewHand) < 17) {
      dealerNewHand.push(dealCard(deck));
    }

    setDealerHand(dealerNewHand);
    setGameOver(true);

    const playerScore = calculateScore(playerHand);
    const dealerScore = calculateScore(dealerNewHand);

    if (dealerScore > 21 || playerScore > dealerScore) {
      setWinner('Player Wins!');
    } else if (playerScore < dealerScore) {
      setWinner('Dealer Wins!');
    } else {
      setWinner('It’s a Draw!');
    }
  };

  const restartGame = () => {
    setDeck(shuffleDeck(cardDeck));
    setPlayerHand([dealCard(deck), dealCard(deck)]);
    setDealerHand([dealCard(deck)]);
    setGameOver(false);
    setWinner('');
  };

  return (
    <div className="blackjack-container">
      <h1>Blackjack</h1>

      <div className="game-section">
        <h2>Dealer's Hand</h2>
        <div className="cards">
          {dealerHand.map((card, index) => (
            <img key={index} src={mapCardToImage(card)} alt={card} className="card" />
          ))}
        </div>

        <h2>Your Hand</h2>
        <div className="cards">
          {playerHand.map((card, index) => (
            <img key={index} src={mapCardToImage(card)} alt={card} className="card" />
          ))}
        </div>

        <h3>Your Score: {calculateScore(playerHand)}</h3>

        {!gameOver ? (
          <div className="actions">
            <button onClick={hit}>Hit</button>
            <button onClick={stand}>Stand</button>
          </div>
        ) : (
          <div className="game-outcome">
            <h2>{winner}</h2>
            <button onClick={restartGame} className="reset-button">Restart Game</button>
          </div>
        )}
      </div>
    </div>
  );
}
