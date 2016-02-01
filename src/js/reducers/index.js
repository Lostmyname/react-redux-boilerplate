import { stringToRegex } from '../lib/util';
import * as actions from '../actions/index';

function cases(state, action) {
	if (action.type !== actions.NEW_INPUT_REGEX && action.type !== actions.NEW_REPLACE_STRING) {
		return state;
	}

	const regex = stringToRegex(action.regexString || state.regexInput);
	const replace = action.replaceString || state.replaceString;

	if (!regex) {
		if (!state.beenValid) {
			return state;
		}

		// If the regular expression is invalid and has been valid in the past,
		// set them all to false
		const casesFailed = state.cases.map(function (testCase) {
			return Object.assign({}, testCase, { solved: false });
		});

		return Object.assign({}, state, { cases: casesFailed });
	}

	const cases = state.cases.map(function (testCase) {
		if (typeof testCase.output === 'string') {
			const result = testCase.input.replace(regex, replace);
			const solved = result === testCase.output;

			return Object.assign({}, testCase, { result, solved });
		} else {
			const solved = regex.test(testCase.input) === testCase.output;
			return Object.assign({}, testCase, { solved });
		}
	});

	return { cases, beenValid: true };
}

function regexInput(text = '', action) {
	if (action.type !== actions.NEW_INPUT_REGEX) {
		return text;
	}

	return action.regexString;
}

function replaceString(text = '', action) {
	if (action.type !== actions.NEW_REPLACE_STRING) {
		return text;
	}

	return action.replaceString;
}

// We're not using combineReducers because `cases` is updating multiple props
// of the state so we have to pass the entire thing in
export default function(state = {}, action) {
	const casesResult = cases(state, action);

	return {
		cases: casesResult.cases,
		beenValid: casesResult.beenValid || false,
		regexInput: regexInput(state.regexInput, action),
		replaceString: replaceString(state.replaceString, action)
	}
}
