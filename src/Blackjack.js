import React, { useState } from 'react';
import { cardDeck, shuffleDeck, dealCard, mapCardToImage } from './cards';
import './Blackjack.css';

export default function Blackjack() {
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState(shuffleDeck(cardDeck));
  const [gameOver, setGameOver] = useState(false);

  const hit = () => {
    if (gameOver) return;

    const newCard = dealCard(deck);
    if (newCard) {
      setCards([...cards, newCard]);
    }

    // Check if the deck is empty
    if (deck.length === 0) {
      setGameOver(true);
    }
  };

  const stand = () => {
    setGameOver(true);
  };

  const resetGame = () => {
    setDeck(shuffleDeck(cardDeck));
    setCards([]);
    setGameOver(false);
  };

  return (
    <div className="blackjack-container">
      <h1>Blackjack</h1>

      <div className="game-section">
        <h2>Your Cards</h2>
        <div className="cards">
          {cards.length > 0 ? (
            cards.map((card, index) => (
              <img 
                key={index} 
                src={mapCardToImage(card)} 
                alt={card} 
                className="card-img" 
              />
            ))
          ) : (
            <p>No cards dealt yet</p>
          )}
        </div>

        <div className="actions">
          <button onClick={hit} disabled={gameOver}>Hit</button>
          <button onClick={stand} disabled={gameOver}>Stand</button>
          <button onClick={resetGame}>Reset</button>
        </div>
      </div>
    </div>
  );
}
