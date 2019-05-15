import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import logo from "../NewLogo.png";

class Navbar extends Component{

    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <img src={logo} alt="Money Talk$" style={{height:100, width:110, align:"center"}}/>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </nav>
        );
    }

}

export default Navbar;