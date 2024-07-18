import { BUY_ICECREAM } from "./actionTypes";

const initialState = {
  numberOfIceCream: 15,
};

const iceCreamReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BUY_ICECREAM:
      return {
        ...state,
        ...payload,
        numberOfIceCream: state.numberOfIceCream - 1,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
