import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div>
      <h2 style={{textAlign:"center"}}>Wikipedia Search</h2>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
