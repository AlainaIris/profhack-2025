import {BET_SET} from './text'

export default function BetMenu({setBet, wallet, pSetters}) {
	pSetters[0](BET_SET);

	function applyBet() {
		let bet = document.getElementById('bet-total').value;
		if (bet < 100 || bet == null) {
			bet = 100;
		} else if (bet > 5000) {
			bet = 5000;
		}
		if (bet > wallet) {
			bet = wallet;
		}
		setBet(bet);
	}
	return (                                
	<div id='bet-menu'>
                        <input id='bet-total' type='number'
min='100' max='5000'/>
                        <button onClick={() => applyBet()}>Enter Bet</button>
                                </div>
	)
}
