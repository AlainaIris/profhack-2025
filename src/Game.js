export default function Game({name, img, setter, id}) {
	return (<div className='game' onClick={() => {setter(id)}}>
			<img className='game-img' src={img}/>
			<h3>{name}</h3>
		</div>)
}
