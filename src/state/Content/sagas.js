import {put} from 'redux-saga/effects';

import {showLoading, hideLoading} from 'react-redux-loading-bar';
import * as actionTypes from './actionTypes';
import * as contentActions from './actionCreators';
import {content as contentAPI, handlingError} from '../../api';

function* getWeatherSaga({payload}) {
	const city = payload.content;
	try {
		yield put(showLoading());
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
			yield put(contentActions.setErrorMessage('Invalid city name'));
		}
	} catch (error) {
		console.log('hola catch', error.stack);
		handlingError(error);
	} finally {
		yield put(hideLoading());
	}
}

export default {
	[actionTypes.GET_WEATHER]: getWeatherSaga,
};
