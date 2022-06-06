import React from "react";
import ReactDOM from "react-dom/client";

const x = 5;
const mybicth  = <h1>i TEST JSX</h1>
const myElement0 = <h1>React is {5 + 5} times better with JSX</h1>;
const myElement1 = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);
const myElement3 = <h1>{x < 4 ? "true " : "false"}</h1> 


export { mybicth, myElement0, myElement1, myElement3 };
