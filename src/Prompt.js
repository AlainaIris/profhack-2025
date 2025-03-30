export default function Prompt({msg, img, pos}) {

	return (
		<div id='dealer-prompt' style={pos}>
			<img id='dealer-img' src={img} />
			<div id='dealer-text'><p id='pad'>{msg}</p></div>
		</div>
	)
}
