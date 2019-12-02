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
		const cityCode = cityPayload.data[0] && cityPayload.data[0].woeid ? cityPayload.data[0].woeid : null;
		if (cityCode) {
			let {data} = yield contentAPI.getWheather(cityCode);
			data = {
				city: data.title,
				weather: data.consolidated_weather[0].weather_state_name,
				temperature: Math.round(data.consolidated_weather[0].the_temp),
				img: `https://www.metaweather.com/static/img/weather/${data.consolidated_weather[0]
					.weather_state_abbr}.svg`,
			};
			yield put(contentActions.setWeather(data));
		} else {
			yield put(contentActions.setErrorMessage('Invalid city name'));
		}
	} catch (error) {
		handlingError(error);
	} finally {
		yield put(hideLoading());
	}
}

export default {
	[actionTypes.GET_WEATHER]: getWeatherSaga,
};
