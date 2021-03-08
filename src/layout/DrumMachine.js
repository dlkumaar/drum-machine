import React from 'react';
import './DrumMachine.css';

const DrumMachine = (props) => {
	return (
		<div className='title'>
			<h1>
				Drum Machine <span>(click or press keys)</span>
			</h1>
			<div className='drum-machine'>{props.children}</div>
		</div>
	);
};

export default DrumMachine;
