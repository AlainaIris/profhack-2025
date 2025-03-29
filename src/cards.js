// cards.js

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

// Convert card symbol to filename format
export function mapCardToImage(card) {
  const suitSymbol = card[0];   // e.g., '♠'
  const valueSymbol = card.slice(1);  // e.g., 'A', '10'

  const suit = suitMap[suitSymbol];
  const value = valueMap[valueSymbol] || valueSymbol;  // Handle face cards
  return `/PNG-cards-1.3/${value}_of_${suit}.png`;   // Adjust path to your folder
}
