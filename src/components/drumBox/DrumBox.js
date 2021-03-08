import React, { Component } from 'react';
import './DrumBox.css';

class DrumBox extends Component {
	constructor(props) {
		super(props);

		// creating a refrence to the audio clip
		this.audio = React.createRef();
	}

	playSound = () => {
		this.audio.current.play();
	};

	handleKeyPress = (e) => {
		console.log(e);
	};

	render() {
		return (
			<div
				className='drum-box'
				onClick={this.playSound}
				onKeyPress={this.props.onKeyPress}>
				{this.props.keyTrigger}
				<audio
					ref={this.audio}
					className='click'
					src={this.props.url}
					id={this.props.keyTrigger}
				/>
			</div>
		);
	}
}

document.addEventListener('keydown', (e) => {
	const id = e.key.toUpperCase();
	const audio = document.getElementById(id);

	if (audio) {
		audio.play();
	}
});

export default DrumBox;
