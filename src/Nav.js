export default function Nav({wallet}) {
	return (
		<nav>
			<div>Home</div>
			<div>Blackjack</div>
			<div>Craps</div>
			<div>
				Money: {wallet}
			</div>
		</nav>
	)
}
