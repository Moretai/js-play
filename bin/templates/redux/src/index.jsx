import "core-js";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import store from './store'

function App() {
  return (
    <div>
      <h1>Have a nice day 💯</h1>
      <Counter />
    </div>
  )
}

function renderApp() {
  ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById("root"));
}

renderApp()