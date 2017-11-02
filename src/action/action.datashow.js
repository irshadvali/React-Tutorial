import  { CONFERENCE_SELECTED_ROOM }  from '../store/Constant'

export const selectValues = text => {
    return {
      type: CONFERENCE_SELECTED_ROOM,
      payload: text
    };
  };  