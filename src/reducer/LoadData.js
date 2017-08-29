import { LOADINFO_API_CALL,LOAD_DATA,LOAD_DATA_FAILED} from '../store/Constant';
const INTIAL_STATE = { 
payload: null,
loading:true,
error:'',
};


export const  loadDataReducer = (state = INTIAL_STATE , action) => {
    console.log(action);
    switch(action.type){
        case  LOADINFO_API_CALL: 
        return { ...state, payload:action.payload,loading: false};
        case LOAD_DATA:
        return { ...state, loading: true, error: '' };
        case LOAD_DATA_FAILED:
        return { ...state,error:'Not Reachable',loading: false};
        default: return state;
    }
}