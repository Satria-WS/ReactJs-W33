import React from "react";
import ReactDOM from "react-dom/client";

class Car6 extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return <h2>Iam car {this.state.color}</h2>;
  }
}

class Car7 extends React.Component {
  render() {
    return <h2>iam car type: {this.props.type} </h2>;
  }
}

class Car8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "ford",
      model: "Mustang",
      color: "red",
    };
  }
  render() {
    return (
      <>
        <h2> Iam a {this.props.model}</h2>
        <h2>I has {this.state.brand}</h2>
      </>
    );
  }
}

class Car9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "tole",
      age: 34,
      hobby: "makan",
    };
  }
  changeHobby = () => {
    this.setState({ hobby: "tidur" });
  };

  render() {
    return (
      <div>
        <h2>{this.state.hobby}</h2>
        <button type="button" onClick={this.changeHobby}>
          Change button Hobby
        </button>
      </div>
    );
  }
}

export { Car6, Car7, Car8, Car9 };
