import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import logo from "../NewLogo.png";


class Navbar extends Component{

    render(){
        return (
            <nav className="navbar black">
                <div className="row">
                    
                    <div className="col-md-6 logo">
                        <img src={logo} alt="Money Talk$" style={{height:250, width:275,}}/>
                    </div>
                    
                </div>
            </nav>
        
        //     <nav>
        //     <div className="nav-wrapper black ">
        //     <img src={logo} alt="Money Talk$" style={{height:150, width:160,}}/>
        //       <ul id="nav-mobile" className="left hide-on-med-and-down ">
               
        //       </ul>
        //     </div>
        //   </nav>
                






        );
    }

}

export default Navbar;