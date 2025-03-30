const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const suits = {
  hearts: '♥',
  diamonds: '♦',
  clubs: '♣',
  spades: '♠'
};

// Function to shuffle the deck
export function shuffleDeck() {
  let deck = [];
  for (let suit in suits) {
    for (let rank of ranks) {
      deck.push(`${rank}_of_${suit}`);
    }
  }
  return deck.sort(() => Math.random() - 0.5);
}

// Function to deal a card from the deck
export function dealCard(deck) {
  return deck.pop();
}

// Function to calculate the score of a hand
export function calculateScore(hand) {
  let score = 0;
  let aceCount = 0;

  hand.forEach(card => {
    const rank = card.split('_')[0];  // Get the rank of the card
    if (['jack', 'queen', 'king'].includes(rank)) {
      score += 10;  // Face cards are worth 10 points
    } else if (rank === 'ace') {
      score += 11;  // Ace starts as 11
      aceCount += 1;  // Count the number of aces in the hand
    } else {
      score += parseInt(rank);  // Number cards are worth their face value
    }
  });

  // Adjust score for aces if necessary
  while (score > 21 && aceCount > 0) {
    score -= 10;  // Change Ace value from 11 to 1
    aceCount -= 1;  // Reduce the ace count
  }

  return score;
}
