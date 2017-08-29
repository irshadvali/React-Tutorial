import { LOADINFO_API_CALL,LOAD_DATA_FAILED,LOAD_DATA,TESTONE_API } from '../store/Constant';


export const  loadInfo = (URL)=>{
        
        return async (dispatch)=>{
       dispatch({ type: LOAD_DATA });
        fetch(TESTONE_API)
       .then(response => response.json())
       .then(responseJson => {
               console.log(responseJson.results)
                dispatch({ type:LOADINFO_API_CALL,payload : responseJson.results });
               
       })
       .catch(error => {
               console.error(error);
        dispatch({ type:LOAD_DATA_FAILED,payload : 'Not Found'});
         
       });
        }


};