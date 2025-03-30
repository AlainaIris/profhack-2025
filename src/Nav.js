<<<<<<< HEAD
import React from 'react';
import moneyBag from './Navigation/money_bag.png';
import blueChip from './Navigation/bluechip-removebg-preview.png';
import redChip from './Navigation/redchip-removebg-preview.png';
import greenChip from './Navigation/greenchip-removebg-preview.png';

export default function Nav({ wallet, setScreen }) {
  return (
    <nav className="menu-bar">
      <div className="menu-item" onClick={() => setScreen(0)}>
        <img className="red-chip" src={redChip} alt="Red Chip" />
        Home
      </div>
      <div className="menu-item" onClick={() => setScreen(2)}>
        <img className="blue-chip" src={blueChip} alt="Blue Chip" />
        Blackjack
      </div>
      <div className="menu-item" onClick={() => setScreen(3)}>
        <img className="green-chip" src={greenChip} alt="Green Chip" />
        Craps
      </div>
      <div className="menu-item">
        <img className="money-bag" src={moneyBag} alt="Money Bag" />
        Money: {wallet}
      </div>
    </nav>
  );
=======
export default function Nav({wallet, setScreen}) {
	return (
		<nav>
			<div className='nav-op' onClick={() => setScreen(0)}>Home</div>
			<div className='nav-op' onClick={() => setScreen(2)}>Blackjack</div>
			<div className='nav-op' onClick={() => setScreen(3)}>Craps</div>
			<div>
				Money: {wallet}
			</div>
		</nav>
	)
>>>>>>> 4493f43 (audio)
}
