import React from 'react';

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} onClick={props.handleClick}>
    {props.text}
  </button>
));

export default FancyButton;
