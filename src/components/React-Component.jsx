import React from "react";
import ReactDOM from "react-dom/client";

class Car1 extends React.Component {
  render() {
    return <h2>Hi aim car</h2>;
  }
}

function Car2() {
  return (
    <>
      <h1>Hi aim car</h1>
    </>
  );
}

//props
function Car3(props) {
  return <h2>Iam {props.color}</h2>;
}

function Car4() {
  return <h2>Iam car</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who live im my Garage</h1>
    </>
  );
}


