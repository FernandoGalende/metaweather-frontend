import { put } from 'redux-saga/effects';

import * as actionTypes from './actionTypes';
import * as contentActions from './actionCreators';
import { content as contentAPI, sendError } from '../../api';

function* getWeatherSaga({ payload }) {
	const city = payload.content;
	try {
		const cityPayload = yield contentAPI.getCode(city);
		const cityCode = cityPayload[0] && cityPayload[0].woeid ? cityPayload[0].woeid : null;
		if (cityCode) {
			let result = yield contentAPI.getWheather(cityCode);
			result = {
				city: result.title,
				weather: result.consolidated_weather[0].weather_state_name,
				temperature: Math.round(result.consolidated_weather[0].the_temp),
				img: `https://www.metaweather.com/static/img/weather/${result.consolidated_weather[0]
					.weather_state_abbr}.svg`,
			};
			yield put(contentActions.setWeather(result));
		} else {
			// throw toater no messages
		}
	} catch (error) {
		sendError(error.message, error.stack);
	} finally {
		// put loadin off
	}
}

export default {
	[actionTypes.GET_WEATHER]: getWeatherSaga,
};
