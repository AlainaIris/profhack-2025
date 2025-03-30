const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const suits = ['hearts', 'diamonds', 'clubs', 'spades'];

export function shuffleDeck() {
  let deck = [];
  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push(`${rank}_of_${suit}`);
    }
  }
  return deck.sort(() => Math.random() - 0.5);
}

export function dealCard(deck) {
  if (deck.length === 0) return null;
  return deck.pop();
}

export function calculateScore(hand) {
  let score = 0;
  let aceCount = 0;

  hand.forEach(card => {
    if (!card) return;

    const rank = card.split('_')[0];

    if (['jack', 'queen', 'king'].includes(rank)) {
      score += 10;
    } else if (rank === 'ace') {
      score += 11;
      aceCount += 1;
    } else {
      score += parseInt(rank);
    }
  });

  while (score > 21 && aceCount > 0) {
    score -= 10;
    aceCount -= 1;
  }

  return score;
}
