import { BUY_CAKE, CAKES_TO_BUY } from "./actionTypes";

const initialState = {
  numberOfCakes: 10,
  number: 1,
};

const cakeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BUY_CAKE:
      return {
        ...state,
        ...payload,
        numberOfCakes: state.numberOfCakes - state.number,
      };
    case CAKES_TO_BUY:
      return {
        ...state,
        ...payload,
        number: payload,
      };

    default:
      return state;
  }
};

export default cakeReducer;
