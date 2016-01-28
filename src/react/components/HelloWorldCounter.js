import React from 'react';

import { connect } from 'react-redux';
import { updateCount } from '../actions';

var HelloWorldCounter = (props) => (
	<div>
		<h1>Hello world x{props.count}</h1>
		<button onClick={props.handleClick}>Say hello</button>
	</div>
);

function mapStateToProps(state) {
	return {
		count: state.helloWorldCount
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleClick: function () {
			dispatch(updateCount())
		}
	};
}

export default connect(
		mapStateToProps,
		mapDispatchToProps
)(HelloWorldCounter);
