import React from 'react';
import Case from './Case';

const Cases = (props) => (
	<dl id="tests">
		{props.cases.map(function (testCase) {
			if (testCase.solved && props.hidePassing) {
				return '';
			}

			return (
				<Case key={testCase.input} {...testCase} type={props.type} />
			)
		})}
	</dl>
);

export default Cases;
