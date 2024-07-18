import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/iceCream/actions";

function HooksIceCreamContainer() {
  const numberOfIceCream = useSelector(
    (state) => state.iceCream.numberOfIceCream
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Hooks number of ice cream {numberOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy ice cream</button>
    </div>
  );
}

export default HooksIceCreamContainer;
