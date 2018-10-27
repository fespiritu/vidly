import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
//import Movies from "./components/movies";
// import LoginForm from "./components/common/loginForm";
import DemoForm from "./components/common/demoForm";

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   //this.handleClickDelete = this.handleClickDelete.bind(this);
  // }

  render() {
    return (
      <div className="container">
        <h1>Demo Form</h1>
        <DemoForm />
      </div>
    );
  }
}

export default App;
