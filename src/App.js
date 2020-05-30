import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Left from "./components/Left";
import Right from "./components/Right";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Left />
      <Right />
    </Provider>
  );
}

export default App;
