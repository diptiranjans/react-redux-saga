import { FETCH_USER } from "../types/index";

const initialState = {
  userList: []
};
const userReducer = (state = initialState, action) => {
  if (action.type === FETCH_USER) {
    return {
      ...state,
      userList: action.payload
    };
  }
  return state;
};

export default userReducer;
