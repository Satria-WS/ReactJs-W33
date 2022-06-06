import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import myelement from "./components/React-Render-html";
import {
  mybicth,
  myElement0,
  myElement1,
  myElement3,
} from "./components/React-JSX";
import { Car6, Car7, Car8, Car9 } from "./components/React-class";
import { Header1, Header2 , Header3 } from "./components/Mounting";
import {Header4 , Header5,Header6} from "./components/Updating"


// ReactDOM.render(<h1>Hello</h1>,document.getElementById("root"));
// ReactDOM.render(<App/>, document.getElementById("root"));

//React-Render-html
// ReactDOM.render(myelement, document.getElementById("root"));

//React-JSX
/* ReactDOM.render(
  [mybicth, myElement0, myElement1, myElement3],
  document.getElementById("root")
);
 */

//React-class
/* ReactDOM.render(
  [<Car6 />, <Car7 type="Mercedes" />, <Car8 />,  <Car9 />],
  document.getElementById("root")
);
 */

//Mounting
// ReactDOM.render([<Header1/>, <Header2 favcol="yellow"/> , <Header3/>], document.getElementById("root"));


//Updating
ReactDOM.render([<Header4 favcol="BROWNIS"/>, <Header5 /> , <Header6/>], document.getElementById("root"));
