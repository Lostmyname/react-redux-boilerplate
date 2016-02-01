import React from 'react';
import { connect } from 'react-redux';
import RegexInput from '../components/RegexInput';
import ReplaceInput from '../components/ReplaceInput';
import HidePassing from '../components/HidePassing';
import Cases from '../components/Cases';
import { newInputRegex, newReplaceString, hidePassingChange } from '../actions/index';

const App = function (props) {
	const stats = {
		solved: props.cases.filter((testCase) => testCase.solved).length,
		total: props.cases.length
	};

	return (
		<div>
			<div className={props.type === 'replace' ? '' : 'single-input'}>
				<RegexInput value={props.regexInput} onChange={props.handleInputChange} />

				{ props.type === 'replace' ? (
					<ReplaceInput value={props.replaceString} onChange={props.handleReplaceChange} />
				) : ''}
			</div>

			<h3>
				Test cases ({stats.solved}/{stats.total})
				<HidePassing value={props.hidePassing} handleChange={props.handlePassingChange} />
			</h3>

			<Cases cases={props.cases} type={props.type} hidePassing={props.hidePassing} />

			{ props.hidePassing && stats.solved === stats.total ? (
				<div className="congratulations">
					Congratulations, your regex passes all the test cases! Remember to share this challenge.
				</div>
			) : ''}
		</div>
	);
};

function mapStateToProps(state) {
	return {
		regexInput: state.regexInput,
		replaceString: state.replaceString,
		cases: state.cases,
		hidePassing: state.hidePassing
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleInputChange: (e) => dispatch(newInputRegex(e.target.value)),
		handleReplaceChange: (e) => dispatch(newReplaceString(e.target.value)),
		handlePassingChange: (e) => dispatch(hidePassingChange(e.target.checked))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);