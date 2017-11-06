import { CONFERENCE_SELECTED_ROOM, TOTAL_VALUE , SUB_VALUE} from "../store/Constant";

export const selectValues = text => {
  return {
    type: CONFERENCE_SELECTED_ROOM,
    payload: text
  };
};
 export const totalvalueCheck = text =>{
   return{
     type: TOTAL_VALUE,
     payload: text
   }
 }
 export const totalvalueSub = text =>{
  return{
    type: SUB_VALUE,
    payload: text
  }
}
