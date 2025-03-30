import point from './dealer/pointer.png'

export default function Home({ setter, promptSetters }) {

	function setScreen() {
		setter(1);
		promptSetters[0]("");
		promptSetters[1](point);
	}
	return (
		<div id='home'>
		<div id='title'>
		<div id='overlay'></div>
		<div id='title-text'>
		<h1>Casino</h1>
		</div>
		</div>
		<div id='play-info'>
		<button id='play-button' onClick={() => setScreen()}>Play Now!</button>
		</div>
		</div>
	)
}
