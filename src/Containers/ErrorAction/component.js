import React from 'react';

export default class ErrorAction extends React.Component {
	render() {
		if (this.props.error) {
			throw new Error('I crashed, unfortunately!');
		}

		return (
			<button onClick={this.props.handleError}>Click me to fire Error!</button>
		);
	}
}