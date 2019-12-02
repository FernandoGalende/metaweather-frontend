import {createAction} from 'redux-actions';
import * as actionTypes from './actionTypes';

export const getWeather = createAction(actionTypes.GET_WEATHER, (content) => ({content}));

export const setWeather = createAction(actionTypes.SET_WEATHER, (content) => ({content}));

export const setErrorMessage = createAction(actionTypes.SET_ERROR_MESSAGE, (content) => ({content}));

export const resetErrorMessage = createAction(actionTypes.RESET_ERROR_MESSAGE, () => ({}));
