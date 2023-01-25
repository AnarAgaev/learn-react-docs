import React from 'react';
import { LangContext } from '../..';

export default class UsedLang extends React.Component {
	render() {
		const { Consumer } = LangContext;

		return (
			<Consumer>
				{(lang) => (
					<mark>
						Your using language is { lang === 'ru' ? 'Russian' : 'English'}
					</mark>
				)}
			</Consumer>
		);
	}
}
