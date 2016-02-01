import { stringToRegex } from '../lib/util';
import * as actions from '../actions/index';

function cases(state, action) {
	if (action.type !== actions.NEW_REGEX) {
		return state;
	}

	let regex = stringToRegex(action.regexString);

	if (!regex) {
		if (!state.beenValid) {
			return state;
		}

		// If the regular expression is invalid and has been valid in the past,
		// set them all to false
		let casesFailed = state.cases.map(function (testCase) {
			return Object.assign({}, testCase, { solved: false });
		});

		return Object.assign({}, state, { cases: casesFailed });
	}

	let cases = state.cases.map(function (testCase) {
		let solved = regex.test(testCase.input) === testCase.output;
		return Object.assign({}, testCase, { solved });
	});

	let stats = {
		total: cases.length,
		solved: cases.filter((testCase) => testCase.solved).length
	};

	return { cases, stats, beenValid: true };
}

function regexInput(text = '', action) {
	if (action.type !== actions.NEW_REGEX) {
		return text;
	}

	return action.regexString;
}

// We're not using combineReducers because `cases` is updating multiple props
// of the state so we have to pass the entire thing in
export default function(state = {}, action) {
	let casesResult = cases(state, action);

	return {
		cases: casesResult.cases,
		stats: casesResult.stats,
		beenValid: casesResult.beenValid || false,
		regexInput: regexInput(state.regexInput, action)
	}
}
