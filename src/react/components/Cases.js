import React from 'react';
import Case from './Case';

var Cases = (props) => (
	<dl id="tests">
		{props.cases.map((testCase) => (
			<Case key={testCase.input} {...testCase} />
		))}
	</dl>
);

export default Cases;
