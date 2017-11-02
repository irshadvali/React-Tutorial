import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducer";
import * as api from './../store/configStore';

let middleware = [thunk];

if (__DEV__) {
  const reduxImmutableStateInvariant = require("redux-immutable-state-invariant").default();
  middleware = [...middleware, reduxImmutableStateInvariant, logger];
} else {
  middleware = [...middleware];
}

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(api))
  );
}
