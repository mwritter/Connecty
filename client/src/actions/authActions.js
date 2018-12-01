import axios from "axios";

import { SET_ERRORS } from "./types";

//Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => {
      history.push("/login");

      dispatch({
        type: SET_ERRORS,
        payload: {}
      });
    })
    .catch(err =>
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    );
};
