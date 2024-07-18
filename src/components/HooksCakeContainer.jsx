import React from "react";
import { buyCake } from "../redux/cake/actions";
import { useSelector, useDispatch } from "react-redux";

function HooksCakeContainer() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatcher = useDispatch();

  return (
    <div>
      <h2>HooksCakeContainer - Number of cakes {numberOfCakes}</h2>
      <button onClick={() => dispatcher(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
