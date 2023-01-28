import React, { useRef } from "react";
import FancyButton from "../FancyButton";

import './style.scss';

export default function FuncRefComponent() {
	const subTitle = useRef(null);
	const refButton = useRef(null);

	const changeSubtitleFontSize = () => {
		subTitle.current.style.fontSize = '20px';
	}

	const changeButtonFontSize = () => {
		const btn = refButton.current;

		btn.style.cssText = `font-size: 20px; 
			background-color: red; 
			color: #fff; 
			padding: 10px; 
			border: 2px solid green; 
			border-radius: 5px;`;
	}

	return(
		<div className="subtitleWrap">
			<h2 ref={subTitle}>Some subtitle here</h2>
			
			<button type='button' onClick={changeSubtitleFontSize}>
				Change subtitle font size
			</button>

			<FancyButton ref={refButton} 
				text={'Add button style'} 
				handleClick={changeButtonFontSize} />
		</div>
	);
}