export function stringToRegex(regexString) {
	const regex = /^\/(.*)\/([a-z]*)$/.exec(regexString);

	if (!regex) {
		return null;
	}

	try {
		return new RegExp(regex[1], regex[2]);
	} catch (e) {
		console.error(e);
		return null;
	}
}
