import React from "react";
import './style.scss';

export default class RefComponent extends React.Component {

	myRef = React.createRef();

	changeTitleColor = () => {
		const title = this.myRef.current;
		title.style.color = 'green';
	}

	componentDidMount() {
		setTimeout(() => this.myRef
			.current
			.style
			.color = 'red', 
		1000);
	}

	render() {
		return (
			<div className='titleWrap'>
				<h1 ref={this.myRef}>Lerarn React Refs</h1>
				<button type='button' onClick={this.changeTitleColor}>
					Change title color
				</button>
			</div>
		);
	}
}