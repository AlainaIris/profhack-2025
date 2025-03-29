import axios from 'axios';
import './App.css';
import useSSE from './useSSE';
import logo from './casino.jpg';
import {useState} from 'react';
import Home from './Home';
import GameSelect from './GameSelect';
import Roulette from './Roulette';

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
	console.log(data);
	return (
		<div className="App">
		<header>
		<title>Casino</title>
		</header>
		{
			gameState == 0 ? <Home setter={setGameState} /> : gameState == 1 ? <GameSelect setter={setGameState}/> : <Roulette />
		}
		</div>
	);
}
