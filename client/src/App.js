import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Gif from "./components/Gif";
import Overview from "./components/Overview";
import Signup from "./components/Signup";
import Home from "./components/Home";

class App extends Component {

  render() {
    return(
      <div className="container">
        <span><Navbar/></span><br/>
        {/* <Login/>
        <Overview/>
        <Signup/>
        <Gif/> */}
        <Home/>
      </div>
    )
  }
}

export default App;
