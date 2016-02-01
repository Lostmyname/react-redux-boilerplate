import React from 'react';

const HidePassing = (props) => (
	<label className="hide-passing">
		<input type="checkbox" checked={props.value} onChange={props.handleChange} />
		Hide passing tests
	</label>
);

export default HidePassing;
