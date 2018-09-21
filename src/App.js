import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Movies from "./components/movies";

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   //this.handleClickDelete = this.handleClickDelete.bind(this);
  // }

  render() {
    return (
      <main className="container">
        <h1>Vidly</h1>
        <Movies />
      </main>
    );
  }
}

export default App;
