export const NEW_REGEX = 'NEW_REGEX';

export const newRegex = function (regexString) {
	return { type: NEW_REGEX, regexString };
};
