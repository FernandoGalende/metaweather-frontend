export const handlingResponse = (successStatus = [ 200 ], errorMessage = 'Error') => ({ status, data }) => {
	if (!successStatus.includes(status)) {
		const error = new Error(errorMessage);
		error.statusCode = status;
		throw error;
	}
	return data;
};

export const logError = (error) => {
	throw error.response.data;
};
