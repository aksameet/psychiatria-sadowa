import { combineReducers } from 'redux';
import ActiveObszar from './reducer_active_obszar';

const rootReducer = combineReducers({
	activeObszar: ActiveObszar,
});

export default rootReducer;