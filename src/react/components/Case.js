import React from 'react';

var Case = (props) => (
	<div>
		<p>Input: {props.input}</p>
		<p>{props.output ? 'Should match' : 'Should not match'}</p>
		<p>Solved: {props.solved.toString()}</p>
	</div>
);

export default Case;