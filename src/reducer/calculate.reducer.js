import { TOTAL_VALUE, SUB_VALUE } from "../store/Constant";

const CalculateReducer = (
  state = {
    totalvalue: 0
  },
  action
) => {
  switch (action.type) {
    case TOTAL_VALUE:
    // totalvalue=action.payload + 1
      return { ...state, totalvalue: state.totalvalue + 1 };
      case SUB_VALUE:
      return { ...state, totalvalue: state.totalvalue - 1 };
    default:
      return state;
  }
};
export default CalculateReducer;