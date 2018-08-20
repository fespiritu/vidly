import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/common/loginForm";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Vidly</h1>
        </header>
        <LoginForm />
      </div>
    );
  }
}

export default App;
