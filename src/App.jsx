import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const App = () => (
  <div className="max-w-6xl mx-auto mt-10 text-3xl">Hello World</div>
);
ReactDOM.render(<App />, document.getElementById("app"));
