import React from "react";
import ReactDOM from "react-dom";

//simple render method
class Header1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }

  render() {
    return <h1>My Favorite Color is {this.state.favoritecolor}</h1>;
  }
}

// getDerivedStateFromProps
class Header2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "meteor" };
  }

  static getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.favcol };
  }

  render() {
    return (
      <>
        <h2>my favoritecolor is : {this.state.favoritecolor}</h2>
      </>
    );
  }
}

//componentDidMount

class Header3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "pink" };
  }

  componentDidMount() {
    this.setState({favoritecolor:"Red"})
  }

  render() {
      return(
          <>
            <h2>my favorite change is {this.state.favoritecolor}</h2>
          </>
      )
  }
}

export { Header1, Header2 , Header3 };
