import {useState} from 'react'


export default function RollingDie({val}) {
	const [value, setValue] = useState(val);
	const interval = setInterval(() => setValue(Math.floor(Math.random() * 6) + 1), 200);
	return (
		<div className='dice'>
		<p className='dice-num'>{value}</p>
		</div>
	)
}
