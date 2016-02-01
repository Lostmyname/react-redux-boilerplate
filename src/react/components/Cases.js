import React from 'react';
import Case from './Case';

var Cases = (props) => (
	<div>
		{props.cases.map((testCase) => (
			<Case key={testCase.input} {...testCase} />
		))}
	</div>
);

export default Cases;
