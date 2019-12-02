import {handleActions} from 'redux-actions';
import initialState from './initialState';
import * as content from './actionCreators';

export default handleActions(
	{
		[content.setWeather]: (state, {payload: {content}}) => {
			if (!state.weadtherByCity.find((element) => element.city === content.city)) {
				return {
					...state,
					weadtherByCity: [...state.weadtherByCity, content],
				};
			}
			return {...state};
		},
		[content.setErrorMessage]: (state, {payload: {content}}) => ({
			...state,
			errorMessage: content,
		}),
		[content.resetErrorMessage]: (state) => ({
			...state,
			errorMessage: '',
		}),
	},
	initialState,
);
