import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import thunk from "redux-thunk";
import "./style.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";
import SearchBar from "./components/SearchBar";
import Content from "./components/Content";


const App = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Wikipedia Search</h2>
      <SearchBar />
      <Content/>
    </div>
  );
};

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById("root")
);
