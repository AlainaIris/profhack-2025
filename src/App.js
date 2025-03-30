import axios from 'axios';
import './App.css';
import useSSE from './useSSE';
import logo from './casino.jpg';
import {useState} from 'react';
import Home from './Home';
import GameSelect from './GameSelect';
import Roulette from './Roulette';
import Blackjack from './Blackjack';
import Dice from './Dice';
import Nav from './Nav';
import Prompt from './Prompt';
import defD from './dealer/default.jpg';
import {  WEBSITE_WELCOME,
  LOSE_1,
  LOSE_2,
  LOSE_3,
  LOSING_STREAK_1,
  LOSING_STREAK_2,
  LOSING_STREAK_3,
  NO_MONEY,
  WINNING_STREAK_1,
  WINNING_STREAK_2,
  WINNING_STREAK_3,
  WIN_1,
  WIN_2,
  WIN_3 } from './text'

//data will be the string we send from our server
const apiCall = () => {
	axios.get('http://localhost:8080/events').then((data) => {
		//this console.log will be in our frontend console
		console.log(data)
	})
}

export default function App() {
	const { data, error } = useSSE('http://localhost:8080/events');
	const [gameState, setGameState] = useState(0);
	const [wallet, setWallet] = useState(1000);
	const [promptMsg, setPM] = useState(WEBSITE_WELCOME);
	const [showPrompt, setPS] = useState(true);
	const [img, setIMG] = useState(defD);
	const pS = [setPM, setIMG, setPS];
	const [streak, setStreak] = useState(0);

	return (
		<div className="App">
		<Nav setScreen={setGameState} wallet={wallet}/>
		{showPrompt ?
		<Prompt msg={promptMsg} pos={{bottom: "30px", left: "15%"}} img={img}/> : <></>}
		<header>
		<title>Casino</title>
		</header>
		{
			gameState == 0 ? <Home setter={setGameState} promptSetters={pS} /> : gameState == 1 ? <GameSelect pSetters={pS} setter={setGameState}/> :
			gameState == 2 ? <Blackjack pSetters={pS} streak={streak} setStreak={setStreak} wallet={wallet} setWallet={setWallet} /> :
			gameState == 3 ?
			<Dice pSetters={pS} streak={streak} setStreak={setStreak} wallet={wallet} setWallet={setWallet}/> : <></>
		}
		</div>
	);
}
