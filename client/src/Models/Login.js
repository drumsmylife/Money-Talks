import React, {Component} from 'react';

class Login extends Component{

    render(){
        return(
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="emailInput">Email Address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                    </div><br/>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter Password"/>
                    </div><br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

}

export default Login;