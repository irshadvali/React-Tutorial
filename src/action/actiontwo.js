import { LOADINFO_API_CALL,LOAD_DATA_FAILED,LOAD_DATA,TESTTWO_API } from '../store/Constant';


export const loadInfotwo = (URL)=>{
        
        return async (dispatch)=>{
       dispatch({ type: LOAD_DATA });
        fetch(TESTTWO_API)
       .then(response => response.json())
       .then(responseJson => {
               console.log(responseJson.results.values)
                dispatch({ type:LOADINFO_API_CALL,payload : responseJson.results.values});
               
       })
       .catch(error => {
               console.error(error);
        dispatch({ type:LOAD_DATA_FAILED,payload : 'Not Found'});
         
       });
        }


};