import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./components/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import history from "./history";
import { createRoot } from "react-dom/client";


const container = document.getElementById("main");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Router  history={history}>
      <Routes />
    </Router>
  </Provider>
);
