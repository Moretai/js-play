import React from "react";
import ReactDom from "react-dom";
import './play'

function App() {
  return <div>Have a nice day 💯</div>;
}

function renderApp() {
  ReactDom.render(<App />, document.getElementById("root"));
}

renderApp()