import Game from './Game'
import blackjack from './blackjack.avif'
import roulette from './roulette.avif'
import dice from './dice.jpg'
import './game.css'

export default function GameSelect({setter}) {
	return (
		<div id='game-select'>
		<div id='game-list'>
		<Game setter={setter} name='Blackjack' img={blackjack}/>
		<Game setter={setter} name='Roulette' img={roulette}/>
		<Game setter={setter} name='Dice' img={dice}/>
		</div>
		</div>
	);
}
