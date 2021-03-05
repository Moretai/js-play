import { INCREASE, DESCREASE } from "../actions/counter";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DESCREASE:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
