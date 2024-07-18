import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./actionTypes";

const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: {
    users,
  },
});

const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: {
    error,
  },
});

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    setTimeout(
      () =>
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            dispatch(fetchUsersSuccess(response.data));
          })
          .catch((error) => {
            dispatch(fetchUsersFailure(error.message));
          }),
      1000
    );
  };
};
