import axios from 'axios';
import { handlingResponse, logError } from './utils';

export const getMembers = () =>
	axios({
		method: 'get',
		url: '',
		data: {},
	})
		.then(handlingResponse([ 200 ], 'Error trying to get members'))
		.catch(logError);
