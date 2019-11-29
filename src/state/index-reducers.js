import { combineReducers } from 'redux';
import contentReducer from './Content/reducer';

const AppReducer = combineReducers({
  content: contentReducer,
});

const rootReducer = (state, action) => AppReducer(state, action);

export default rootReducer;
