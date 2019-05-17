import React, { Component } from "react";
import { Link } from "react-router-dom";
// import background from "../money.js";
import "../layout/landing.css"; 







class Landing extends Component {
  render() {
    return (
      // <div className='background-image' style ={ {background: "url("+bg+")" } }></div>
      // <img src={logo} alt="Money Talk$" style={{height:200, width:275,}}/>
      // <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
      //   <Text>Inside</Text>
      // </ImageBackground>
  
      
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>MoneyTalk$!</b> Save that Money BRO!!!
            </h4>
            <p className="flow-text grey-text text-darken-1">
             Don't even think about buying another drink idiot!
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Landing;
