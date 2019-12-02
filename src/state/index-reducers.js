import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading-bar';
import contentReducer from './Content/reducer';

const AppReducer = combineReducers({
	loadingBar: loadingBarReducer,
	content: contentReducer,
});

const rootReducer = (state, action) => AppReducer(state, action);

export default rootReducer;
