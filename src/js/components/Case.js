import React from 'react';

const Case = function (props) {
	// Or for undefined, undefined!
	const className = ({
		true: 'passed',
		false: 'failed'
	})[props.solved];

	const outputText = ({
		match: props.output ? 'Should match' : 'Should not match',
		replace: props.output
	})[props.type];

	return (
		<div>
			<dt className={className}>{props.input}</dt>
			<dd className={className}>{outputText}</dd>

			{ typeof props.result === 'string' && !props.solved ? (
					<dd>{props.result}</dd>
			) : ''}
		</div>
	);
};

export default Case;