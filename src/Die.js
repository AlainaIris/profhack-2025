import {useState} from 'react'

export default function Die({val}) {
	const [value, setValue] = useState(val);
	let interval;
	if (val > 0) {
		setValue(val);
	} else {
	interval = setInterval(() => setValue(Math.floor(Math.random() * 6) + 1), 200);
	}
	return (
		<div className='dice'>
		<p id=''>{value}</p>
		</div>
	)
}
