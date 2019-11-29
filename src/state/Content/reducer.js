import { handleActions } from 'redux-actions';
import initialState from './initialState';
import * as content from './actionCreators';

export default handleActions({}, initialState);
