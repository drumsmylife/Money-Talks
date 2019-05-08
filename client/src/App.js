import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Gif from "./components/Gif";
import Overview from "./components/Overview";

class App extends Component {
  render() {
    return(
      <div className="container">
        <span><Navbar/></span>
        {/* <Login/> */}
        <Overview/>
        <Login/>
        <br/><br/><br/>
        <Gif/>
      </div>
    )
  }
}

export default App;
