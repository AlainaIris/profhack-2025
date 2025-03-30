import {useState} from 'react'


export default function StaticDie({val}) {
	const [value, setValue] = useState(val);
	console.log(val);
	return (
		<div className='dice'>
		<p className='dice-num'>{val}</p>
		</div>
	)
}
