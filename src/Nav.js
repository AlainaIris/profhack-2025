export default function Nav({wallet, setScreen}) {
	return (
		<nav>
			<div onClick={() => setScreen(0)}>Home</div>
			<div onClick={() => setScreen(2)}>Blackjack</div>
			<div onClick={() => setScreen(3)}>Craps</div>
			<div>
				Money: {wallet}
			</div>
		</nav>
	)
}
