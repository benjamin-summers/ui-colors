import React from 'react';


function Label(props) {
	var labelStyle = {
		backgroundColor: props.color,
		height: 150 + "px",
		width: 150 + "px"
	}
	
	return (
		<React.Fragment>
		<div style={labelStyle}>
		</div>
		<h3>{props.color}</h3>
		</React.Fragment>
	)
}

export default Label;

