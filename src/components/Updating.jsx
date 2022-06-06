import React from "react";
import ReactDOM from "react-dom";

class Header4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "brown" };
  }

  static getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.favcol };
  }

  changeColor = () => {
    this.setState({ favoritecolor: "BLACKY MAMBOS" });
  };

  render() {
    return (
      <>
        <h2>this is color Header4 {this.state.favoritecolor}</h2>
        <button type="button" onClick={this.changeColor}>
          Change color header4
        </button>
      </>
    );
  }
}

class Header5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "AURA KASIH" };
  }

  componentDidMount() {
    this.setState({ favoritecolor: "ARIEL" });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // return <p>Before the update, the favorite was + {prevState.favoritecolor}</p>
    document.getElementById("div1").innerHTML =
      "Before update " + prevState.favoritecolor;
  }

  componentDidUpdate() {
    // return  <p>test update {this.state.favoritecolor} </p>;
    document.getElementById("div2").innerHTML =
      "the update: " + this.state.favoritecolor;
  }

  render() {
    return (
      <>
        <h2>this is color Header5 {this.state.favoritecolor}</h2>
        <div id="div1"></div>
        <div id="div2"></div>
      </>
    );
  }
}

class Header6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  delHeader = () => {
    this.setState({ show: false });
  };

  refreshPage() {
    window.location.reload(false);
  }
  render() {
    const random = Math.floor(Math.random() * 2);
    let myheader;
    if(this.state.show) {
        myheader = <Child/>
    }
    return (
      <>
        <h2 style={{display:"block"}}>this is color Header6 {myheader}</h2>
        <p>{random}</p>
        <button onClick={this.refreshPage} type="button" value="Refresh Page">
          Refresh Page
        </button>
        <button type="button" onClick={this.delHeader}>Delete Header</button>
      </>
    );
  }
}

class Child extends React.Component {
    render(){
        return <h2>Hello Child</h2>
    }
}

export { Header4, Header5, Header6 };
