import { BUY_CAKE, CAKES_TO_BUY } from "./actionTypes";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

export const cakesToBuy = (number) => {
  return {
    type: CAKES_TO_BUY,
    payload: number,
  };
};
