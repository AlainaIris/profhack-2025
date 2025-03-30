export default function Prompt({msg, img, pos}) {

	return (
		<div id='dealer-prompt' style={pos}>
			<img id='dealer-img' src={img} />
			<p id='dealer-text'>{msg}</p>
		</div>
	)
}
