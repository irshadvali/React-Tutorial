import  {CONFERENCE_SELECTED_ROOM } from '../store/Constant'
  
  const ShowDataReducer = (
    state = {
        savedata:"",
    },
    action
  ) => {
    switch (action.type) {
      case CONFERENCE_SELECTED_ROOM:
        return { ...state, savedata: action.payload };
  
      default:
        return state;
    }
  };
  export default ShowDataReducer;
  