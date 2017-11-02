import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "./../action/action.signup";
import PostCallScreen from "./../view/PostCallScreen";

const mapStateToProps = state => {
  return {
    signUpResults: state.SignUpReducer.signUpResults,
    error: state.SignUpReducer.error,
    loading: state.SignUpReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (Email, Password) => {
      dispatch(loginUser(Email, Password));
    }
  };
};

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(PostCallScreen);
export default SignUpContainer;