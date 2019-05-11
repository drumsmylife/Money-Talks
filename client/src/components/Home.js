import React, {Component} from "react";
import Login from "./Login";
import Signup from "./Signup";

import{
    getFromStorage,
  } from "../util/storage";
  
class Home extends Component {
    
    constructor(props){
        super(props);
    
        this.state = {
            isLoading: true,
            token: '',
        };

        this.logOut = this.logOut.bind(this);
        
    }


    logOut() {
        this.setState({
            isLoading: true
        });
        const obj = getFromStorage('Money Talk$')
        if (obj && obj.token) {
            const {token} = obj

            fetch('/api/account/logout?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success){
                        this.setState({
                            token: '',
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            isLoading: false
                        });
                    }
                });
        } else {
            this.setState({
            isLoading: false,
            });
        }
    }

    componentDidMount () {
        const obj = getFromStorage('Money Talk$')
        if (obj && obj.token){
            const {token} = obj

            fetch('/api/account/verify?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success){
                        this.setState({
                            token,
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            isLoading: false
                        });
                    }
                });
        } else {
            this.setState({
            isLoading: false,
            });
        }
        
    }

    render() {
        const {
            isLoading,
            token
        } = this.state;

        if (isLoading) {
            return(<div><p>Loading...</p></div>);
        }

        if (!token) {
            return(
                <div>
                    <div>
                        <Login/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div>
                        <Signup/>
                    </div>
                    
                </div>
            );
        }

        return(
            <div>
                <p>Account</p>
                <button onClick={this.logOut}>Logout</button>
            </div>
        );
    }

}

export default Home;