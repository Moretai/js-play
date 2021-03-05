import { createStore } from "redux";
import rootReducer from "../reducers";
const preloadState = {
  counter: 26,
};

const store = createStore(rootReducer, preloadState);

window.store = store;

export default store;
