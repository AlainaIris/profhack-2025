import {useState} from 'react'
import './craps.css'
import RollingDie from './RollingDie';
import StaticDie from './StaticDie'
// Dice Gambling Game



// Function to simulate rolling a die
function rollDie() {
	return Math.floor(Math.random() * 6) + 1;
}

// Function to roll two dice
export default function Dice({wallet, setWallet}) {
	const [buttonText, setButtonText] = useState("Roll");
	const [resultText, setResultText] = useState("Roll to begin");
	const [betSet, setBetSet] = useState(false);
	const [bet, setBet] = useState(0);
	const [point, setPoint] = useState(0);
	const [d1, setD1] = useState(0);
	const [d2, setD2] = useState(0);

	function rollDices() {
		let r1 = rollDie();
		let r2 = rollDie();
		setD1(r1);
		setD2(r2);
		return r1 + r2;
	}

	function addMoney() {
		setPoint(0);
		setWallet(wallet + bet);
	}

	function loseMoney() {
		setPoint(0);
		setWallet(wallet - bet);
	}

	function checkRoll() {
		let roll = rollDices();
		let gameOver = false;
		let message = '';
		// Coming out roll
		if (point === 0) {
			if (roll === 7 || roll === 11) {
				message = "You win! You rolled 7 or 11.";
				gameOver = true;
			} else if (roll === 2 || roll === 3 || roll
				=== 12) {
				message = "You lose! You rolled 2, 3, or 12.";
				gameOver = true;
			} else {
				setPoint(roll);  // Set the point
				message = `Your point is ${roll}. Roll Again.`;
			}
		} else {
			// Point roll
			if (roll === point) {
				message = `You win! You rolled your point
${point} again.`;
				addMoney();
				gameOver = true;
			} else if (roll === 7) {
				message = "You lose! You rolled a 7 before your point.";
				gameOver = true;
				loseMoney();
			} else {
				message = `You rolled a ${roll}. Keep going! Your point is still ${point}.`;
			}
		}
		setResultText(message);
	}

	function enterBet() {
		let bet = document.getElementById('bet-total').value;
		setBet(parseInt(bet));
		setBetSet(true);
	}

	return (
		<div id='craps'>
		{
			betSet ?
			<div>
				<div id='die-set'>
				{d1 == 0 ? <>
					<RollingDie />
					<RollingDie />
					</> :
					<>
						<StaticDie val={d1}/>
						<StaticDie val={d2}/>
					</>}
				</div>
				<p>{resultText}</p>
				<button onClick={() => checkRoll()}>{buttonText}</button>
			</div>	 :
				<div id='bet-menu'>
			<input id='bet-total' type='number' min='100' max='5000'/>
			<button onClick={() => enterBet()}>Enter Bet</button>
				</div>
		}
		</div>
	)
}
