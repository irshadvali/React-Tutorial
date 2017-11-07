import { TOTAL_VALUE, SUB_VALUE } from "../store/Constant";

const CalculateReducer = (
  state = {
    totalvalue: 0
  },
  action
) => {
  switch (action.type) {
    case TOTAL_VALUE:
     // totalvalue=state.totalvalue + 1
      return { ...state, totalvalue: action.payload };
      case SUB_VALUE:
     // totalvalue=state.totalvalue - 1
      return { ...state, totalvalue: action.payload };
    default:
      return state;
  }
};
export default CalculateReducer;