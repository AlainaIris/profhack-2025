import Game from './Game'
import blackjack from './blackjack.avif'
import roulette from './roulette.avif'
import dice from './dice.jpg'
import deal from './dealer/deal.png'
import './game.css'

export default function GameSelect({setter, pSetters}) {
	return (
		<div id='game-select'>
		<div id='game-list'>
		<Game pSetters={pSetters} pParams={["",deal]} setter={setter} id={2} name='Blackjack' img={blackjack}/>
		<Game pSetters={pSetters} pParams={["",deal]} setter={setter} id={3} name='Dice' img={dice}/>
		</div>
		</div>
	);
}
