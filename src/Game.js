export default function Game({pSetters, pParams, name, img, setter, id}) {
	function setGameInfo() {
		setter(id);
		pSetters[0](pParams[0]);
		pSetters[1](pParams[1]);
	}

	return (<div className='game' onClick={() => {setGameInfo()}}>
			<img className='game-img' src={img}/>
			<h3>{name}</h3>
		</div>)
}
