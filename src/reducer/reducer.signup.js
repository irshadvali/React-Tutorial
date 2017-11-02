import {
    SIGNUP_REQUEST,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS
  } from "./../PostCallSample/utils/Constant";
  
  const SignUpReducer = (
    state = {
      signUpResults: [],
      loading: true,
      error: '',
    },
    action
  ) => {
    switch (action.type) {
      case SIGNUP_SUCCESS:
        return Object.assign({}, state, {
          signUpResults: action.user.body,
          status: action.status,
          loading: false,
        });
      case SIGNUP_REQUEST:
        return Object.assign({}, state, {
          status: action.status,
          loading: false,
          error: action.error
        });
      case SIGNUP_FAILURE:
        return Object.assign({}, state, {
          status: action.status,
          loading: true,
        });
      default:
        return state;
    }
  };
  export default SignUpReducer;