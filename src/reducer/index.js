import { combineReducers } from 'redux';
import { loadDataReducer } from './LoadData'; 
import { loadDataReducerTwo } from './ReducerTwo'; 

export default combineReducers({
Load: loadDataReducer,
LoadTwo: loadDataReducerTwo
});
