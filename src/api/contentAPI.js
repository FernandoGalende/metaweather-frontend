import axios from 'axios';
import { handlingResponse, logError } from './utils';

export const getCode = (city) =>
	axios
		.get('https://www.metaweather.com/api/location/search/', {
			params: { query: city },
		})
		.then(handlingResponse([ 200 ], 'Error trying to get members'))
		.catch(logError);

export const getWheather = (code) =>
	axios
		.get(`https://www.metaweather.com/api/location/${code}`)
		.then(handlingResponse([ 200 ], 'Error trying to get members'))
		.catch(logError);
