import React, { Component } from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import HeadingWrapper from "./primitives/heading";

import "./index.scss";

const App = () => (
  <div className="max-w-6xl mx-auto mt-10 text-3xl">
    <HeadingWrapper>Counter Exercise</HeadingWrapper>
    <Counter />
    <hr />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
