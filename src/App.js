import axios from 'axios';
import './App.css';
import useSSE from './useSSE';
import logo from './casino.jpg';

//data will be the string we send from our server
const apiCall = () => {
  axios.get('http://localhost:8080/events').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}

export default function App() {
  const { data, error } = useSSE('http://localhost:8080/events');
console.log(data);
return (
    <div className="App">
      <header>
	<title>Casino</title>
      </header>
	<div id='home'>
	<div id='title'>
		<div id='overlay'></div>
		<div id='title-text'>
			<h1>Casino</h1>
		</div>
	</div>
	<div id='play-info'>
		<button id='play-button'>Play Now!</button>
	</div>
	</div>
	</div>
  );
}
