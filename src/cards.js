export const cardDeck = [
  '♠A', '♠2', '♠3', '♠4', '♠5', '♠6', '♠7', '♠8', '♠9', '♠10', '♠J', '♠Q', '♠K', 
  '♥A', '♥2', '♥3', '♥4', '♥5', '♥6', '♥7', '♥8', '♥9', '♥10', '♥J', '♥Q', '♥K', 
  '♦A', '♦2', '♦3', '♦4', '♦5', '♦6', '♦7', '♦8', '♦9', '♦10', '♦J', '♦Q', '♦K', 
  '♣A', '♣2', '♣3', '♣4', '♣5', '♣6', '♣7', '♣8', '♣9', '♣10', '♣J', '♣Q', '♣K'
];

export function shuffleDeck(deck) {
  return [...deck].sort(() => Math.random() - 0.5);
}

export function dealCard(deck) {
  return deck.pop();
}

export function mapCardToImage(card) {
  const suitMap = {
    '♠': 'spades',
    '♥': 'hearts',
    '♦': 'diamonds',
    '♣': 'clubs'
  };

  const valueMap = {
    'A': 'ace',
    'J': 'jack',
    'Q': 'queen',
    'K': 'king'
  };

  const suit = suitMap[card[0]];
  const value = valueMap[card.slice(1)] || card.slice(1);

  return `/assets/PNG-cards-1.3/${value}_of_${suit}.png`;
}
