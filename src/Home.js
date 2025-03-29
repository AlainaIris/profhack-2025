export default function Home({ setter }) {
	return (
		<div id='home'>
		<div id='title'>
		<div id='overlay'></div>
		<div id='title-text'>
		<h1>Casino</h1>
		</div>
		</div>
		<div id='play-info'>
		<button id='play-button' onClick={() => setter(1)}>Play Now!</button>
		</div>
		</div>
	)
}
