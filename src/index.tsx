import React from "react";
import ReactDOM from "react-dom";
import { Bezier } from "bezier-js";

ReactDOM.render(
  <React.StrictMode>
    <h1>Hello</h1>
  </React.StrictMode>,
  document.getElementById("root")
);

const it = new Bezier();
console.log(it);
