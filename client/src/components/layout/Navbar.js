import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import logo from "../NewLogo.png";

class Navbar extends Component{

    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="row">
                    <div className="col-md-4">
                        <img src={logo} alt="Money Talk$" style={{height:150, width:150}}/>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Navbar;