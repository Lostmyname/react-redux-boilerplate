import React from 'react';
import { connect } from 'react-redux';
import RegexInput from '../components/RegexInput';
import ReplaceInput from '../components/ReplaceInput';
import Cases from '../components/Cases';
import { newInputRegex, newReplaceString } from '../actions/index';

const App = (props) => (
	<div>
		<div className={props.type === 'replace' ? '' : 'single-input'}>
			<RegexInput value={props.regexInput} onChange={props.handleInputChange} />

			{ props.type === 'replace' ? (
				<ReplaceInput value={props.replaceString} onChange={props.handleReplaceChange} />
			) : ''}

		</div>
		<Cases cases={props.cases} type={props.type} />
	</div>
);

function mapStateToProps(state) {
	return {
		regexInput: state.regexInput,
		replaceString: state.replaceString,
		cases: state.cases
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleInputChange: (e) => dispatch(newInputRegex(e.target.value)),
		handleReplaceChange: (e) => dispatch(newReplaceString(e.target.value))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);