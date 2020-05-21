import { FETCH_USER, FETCH_URL } from "../types/index";

export const fetchUser = () => {
  return dispatch => {
    // this is redux thunk use
    fetch(FETCH_URL)
      .then(res => res.json())
      .then(response => {
        dispatch({
          type: FETCH_USER,
          payload: response
        });
      });
  };
};
