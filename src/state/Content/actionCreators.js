import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';

export const getWeather = createAction(actionTypes.GET_WEATHER, (content) => ({ content }));

export const setWeather = createAction(actionTypes.SET_WEATHER, (content) => ({ content }));
