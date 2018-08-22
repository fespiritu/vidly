import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/common/loginForm";
import "bootstrap/dist/css/bootstrap.css";
import SelectedIndicator from "./components/common/selectedIndicator";

const items = [
  { id: 1, label: "Brown bag 1" },
  { id: 2, label: "Brown bag 2" },
  { id: 3, label: "Brown bag 3" },
  { id: 4, label: "Brown bag 4" }
];
class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Vidly</h1>
        </header>
        <LoginForm />
        <hr />
        <SelectedIndicator items={items} />
      </div>
    );
  }
}

export default App;
