import { combineReducers } from "redux";
import cakeReducer from "./cake/reducer";
import iceCreamReducer from "./iceCream/reducer";
import usersReducer from "./users/reducer";

export default combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  users: usersReducer,
});
