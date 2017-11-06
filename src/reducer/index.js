import { combineReducers } from 'redux';
import { loadDataReducer } from './LoadData'; 
import { loadDataReducerTwo } from './ReducerTwo'; 
import SignUpReducer from "./reducer.signup";
import ShowDataReducer from "./showdata.reducer"
import CalculateReducer from "./calculate.reducer"
export default combineReducers({
Load: loadDataReducer,
LoadTwo: loadDataReducerTwo,
SignUpReducer,
ShowDataReducer,
CalculateReducer
});
