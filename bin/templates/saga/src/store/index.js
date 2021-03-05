import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "../sagas/mySaga";
import rootReducer from "../reducers";

const preloadState = {
  counter: 26,
};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  preloadState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);

window.store = store;

export default store;
