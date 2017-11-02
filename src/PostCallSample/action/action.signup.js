import {
    SIGNUP_REQUEST,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS
  } from "./../utils/Constant";

export const REQUESTING = "requesting";
export const SUCCESS = "success";
export const ERROR = "error";


export function loginUserRequest() {
  return {
    type: SIGNUP_REQUEST,
    status: REQUESTING
  };
}

export function loginUserSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    status: SUCCESS,
    user
  };
}

export function loginUserFailure(error) {
  return {
    type: SIGNUP_FAILURE,
    status: ERROR,
    error
  };
}

export function loginUser(email_id, password) {
  return async (dispatch, getState,api) => {
    dispatch(loginUserRequest());
    try {
      const result = await api.post("login", 
      {
        'email_id':email_id,
        'password':password,
      });

      const resultJson = await result.json();
      if (result.status > 400) {
        throw new Error(`[${result.status}] ${resultJson.error.message}`);
      }
    
      dispatch(loginUserSuccess(resultJson));
    } catch (e) {
      dispatch(loginUserFailure(e.message));
    }
  };
}