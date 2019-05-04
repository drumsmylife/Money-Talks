import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Models/Login";
import Navbar from "./Models/Navbar";

class App extends Component {
  render() {
    return(
      <div className="container">
        <span><Navbar/></span>
        <Login/>
      </div>
    )
  }
}

export default App;
