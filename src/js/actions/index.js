export const NEW_INPUT_REGEX = 'NEW_INPUT_REGEX';

export const newInputRegex = function (regexString) {
	return { type: NEW_INPUT_REGEX, regexString };
};

export const NEW_REPLACE_STRING = 'NEW_REPLACE_STRING';

export const newReplaceString = function (replaceString) {
	return { type: NEW_REPLACE_STRING, replaceString };
};

export const HIDE_PASSING_CHANGE = 'HIDE_PASSING_CHANGE';

export const hidePassingChange = function (hidePassing) {
	return { type: HIDE_PASSING_CHANGE, hidePassing };
};