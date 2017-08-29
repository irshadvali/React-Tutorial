import { combineReducers } from 'redux';
import { loadDataReducer } from './LoadData'; 

export default combineReducers({
Load: loadDataReducer,
});
