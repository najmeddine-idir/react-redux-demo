import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./actionTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS_REQUEST:
      return { ...state, ...payload, loading: true, users: [], error: "" };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        users: payload.users,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        ...payload,
        loading: false,
        users: [],
        error: payload.error,
      };

    default:
      return state;
  }
};

export default usersReducer;
