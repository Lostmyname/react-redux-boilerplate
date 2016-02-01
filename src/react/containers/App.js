import React from 'react';
import { connect } from 'react-redux';
import RegexInput from '../components/RegexInput';
import Cases from '../components/Cases';
import { newRegex } from '../actions/index';

var App = (props) => (
	<div>
		<RegexInput value={props.regexInput} onChange={props.handleInputChange} />
		<Cases cases={props.cases} />
	</div>
);

function mapStateToProps(state) {
	return {
		regexInput: state.regexInput,
		cases: state.cases
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleInputChange: (e) => dispatch(newRegex(e.target.value))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);