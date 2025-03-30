import {useState, useEffect} from 'react'
import './craps.css'
import RollingDie from './RollingDie';
import StaticDie from './StaticDie';
import BetMenu from './BetMenu';
import {
	WIN_1,WIN_2,WIN_3,LOSE_1,LOSE_2,LOSE_3,WINNING_STREAK_1,WINNING_STREAK_2,WINNING_STREAK_3,LOSING_STREAK_1,LOSING_STREAK_2,LOSING_STREAK_3
} from './text'
// Dice Gambling Game



// Function to simulate rolling a die
function rollDie() {
	return Math.floor(Math.random() * 6) + 1;
}

// Function to roll two dice
export default function Dice({wallet, setWallet, streak, setStreak, pSetters}) {
	const [audio, setAudio] = useState();
	const [buttonText, setButtonText] = useState("Roll");
	const [resultText, setResultText] = useState("Roll to begin");
	const [betSet, setBetSet] = useState(false);
	const [bet, setBet] = useState(0);
	const [point, setPoint] = useState(0);
	const [d1, setD1] = useState(0);
	const [d2, setD2] = useState(0);
	const [playing, setPlaying] = useState(false);

	function rollDices() {
		let r1 = rollDie();
		let r2 = rollDie();
		setD1(r1);
		setD2(r2);
		return r1 + r2;
	}

	function addMoney() {
		let streakNew;
		if (streak > 0) {
		streakNew = streak + 1;
		} else {
		streakNew = 1;
		}
		setStreak(streakNew);
		textSet(streakNew);
		setPoint(0);
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
		setPoint(0);
		setWallet(wallet - bet);
		textSet(streakNew);
	}

	function randWin() {
		let wins = [WIN_1, WIN_2, WIN_3];
		return wins[Math.floor(Math.random() * 3)];
	}

	function randLose() {
		let losses = [LOSE_1, LOSE_2, LOSE_3];
		return losses[Math.floor(Math.random() * 3)];
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
		console.log(text);
		console.log(pSetters);
		setPlaying(true);
		pSetters[0](text[0]);
		let s = document.getElementById('die-audio');
		setAudio(text[1]);
	}

	useEffect(() => {
		let s = document.getElementById('die-audio');
		if (playing && s) {
			s.play();
		}
	}, [audio, playing]);

	function checkRoll() {
		let roll = rollDices();
		let gameOver = false;
		let message = '';
		// Coming out roll
		if (point === 0) {
			if (roll === 7 || roll === 11) {
				message = "You win! You rolled 7 or 11.";
				gameOver = true;
				addMoney();
			} else if (roll === 2 || roll === 3 || roll
				=== 12) {
				message = "You lose! You rolled 2, 3, or 12.";
				gameOver = true;
				loseMoney();
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

	function enterBet(bet) {
		setBet(parseInt(bet));
		setBetSet(true);
	}

	return (
		<div id='craps'>
<<<<<<< HEAD
			<div id="craps-title">Craps</div>
=======
		<audio id='die-audio' src={audio}></audio>
>>>>>>> 4493f43 (audio)
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
			<BetMenu pSetters={pSetters} setBet={enterBet} wallet={wallet}/>
		}
		</div>
	)
}
