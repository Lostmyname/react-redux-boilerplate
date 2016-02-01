import React from 'react';

var Case = (props) => (
	<div>
		<dt className={props.solved ? 'passed' : 'failed'}>{props.input}</dt>
		<dd className={props.solved ? 'passed' : 'failed'}>{props.output ? 'Should match' : 'Should not match'}</dd>
	</div>
);

export default Case;