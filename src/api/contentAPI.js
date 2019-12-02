import axios from 'axios';
import {handlingError, logError} from './errorAPI';

export const getCode = (city) => axios
		.get('https://www.metaweather.com/api/location/search/', {
			params: {query: city},
		})
		.then(handlingError([200], 'Error trying to get code'))
		.catch(logError);

export const getWheather = (code) => axios
		.get(`https://www.metaweather.com/api/location/${code}`)
		.then(handlingError([200], 'Error trying to get wheather'))
		.catch(logError);
