import React from 'react';
import HelloWorldCounter from '../components/HelloWorldCounter';

var App = React.createClass({
	render: function () {
		return (
			<div>
				<HelloWorldCounter />
			</div>
		);
	}
});

export default App;
