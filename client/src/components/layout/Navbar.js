import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import logo from "../NewLogo.png";

class Navbar extends Component{

    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="row">
                    <div className="col-md-4">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdown" data-toggle="dropDown" aria-haspopup="true" aria-expanded="true">Menu
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropDown">
                                <button className="dropdown-item" type="button">Profile</button>
                                <button className="dropdown-item" type="button">Manage Income</button>
                                <button className="dropdown-item" type="button">Manage Expenses</button>
                            </div>
                        </div>
                        <img src={logo} alt="Money Talk$" style={{height:40, width:40, display:"inline"}}/>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Navbar;