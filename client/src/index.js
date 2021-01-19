import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// provider keep track of the store (global state) and so allow us to access to that store anywhere
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
