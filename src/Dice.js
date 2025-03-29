// Dice Gambling Game

// Function to simulate rolling a die
function rollDie() {
	return Math.floor(Math.random() * 6) + 1;
  }
  
  // Function to roll two dice
  function rollDice() {
	return rollDie() + rollDie();
  }
  
  // Function to start the dice game
  function startGame() {
	let point = null;
	let gameOver = false;
	let message = "Welcome to the Dice Game! Let's roll.";
  
	while (!gameOver) {
	  const roll = rollDice();
	  console.log(`You rolled: ${roll}`);
  
	  // Coming out roll
	  if (point === null) {
		if (roll === 7 || roll === 11) {
		  message = "You win! You rolled 7 or 11.";
		  gameOver = true;
		} else if (roll === 2 || roll === 3 || roll === 12) {
		  message = "You lose! You rolled 2, 3, or 12.";
		  gameOver = true;
		} else {
		  point = roll;  // Set the point
		  message = `Your point is ${point}. Try to roll ${point} again before rolling a 7.`;
		}
	  } else {
		// Point roll
		if (roll === point) {
		  message = `You win! You rolled your point (${point}) again.`;
		  gameOver = true;
		} else if (roll === 7) {
		  message = "You lose! You rolled a 7 before your point.";
		  gameOver = true;
		} else {
		  message = `You rolled a ${roll}. Keep going! Your point is still ${point}.`;
		}
	  }
  
	  console.log(message); // Show the message
	}
  }
  
  // Start the game
  startGame();
  