import React, { Component } from "react";
import logo from "./NewLogo.png";
import "./App.css";
import Login from "./models/Login";
import Navbar from "./models/Navbar";
import Gif from "./models/Gif.js";
import Overview from "./models/Overview";

class App extends Component {
  render() {
    return(
      <div className="container">
        <span><Navbar/></span>
        {/* <Login/> */}
        <Overview/>
        <br/><br/><br/>
        <Gif/>
      </div>
    )
  }
}

export default App;
