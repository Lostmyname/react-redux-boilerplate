export var NEW_REGEX = 'NEW_REGEX';

export var newRegex = function (regexString) {
	return { type: NEW_REGEX, regexString };
};
