import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Autocomplete from "./components/autocomplete";
import HeadingWrapper from "./primitives/heading";

import "./index.scss";

const App = () => (
  <div className="max-w-6xl mx-auto mt-10 text-3xl">
    <HeadingWrapper>Counter Exercise</HeadingWrapper>
    <Counter />
    <hr />
    <HeadingWrapper>Todo Exercise</HeadingWrapper>
    <Todo />
    <hr />
    <HeadingWrapper>Autocomplete Exercise</HeadingWrapper>
    <Autocomplete />
    <hr />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
