export const handlingError = (successStatus = [200], errorMessage = 'Error') => {
	if (!successStatus) {
		const error = new Error(errorMessage);
		error.statusCode = error.status;
		throw error;
	}
};

export const logError = (error) => {
	// eslint-disable-next-line no-console
	console.error('ERROR: ', error);
	throw error;
};
