import React from 'react';

const Case = function (props) {
	// Or for undefined, undefined!
	const className = ({
		true: 'passed',
		false: 'failed'
	})[props.solved];

	return (
		<div>
			<dt className={className}>{props.input}</dt>
			<dd className={className}>{props.output ? 'Should match' : 'Should not match'}</dd>
		</div>
	);
};

export default Case;