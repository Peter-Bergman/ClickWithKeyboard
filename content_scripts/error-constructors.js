console.info("error-constructor.js running...");

function checkType(value, expectedType) {
	if (typeof(value) !== expectedType) {
		throw new TypeError(`key was of type ${typeof(key)} instead of ${expectedType}`);
	}
}

console.info("error-constructor.js finished running...");
