import React, {Component} from 'react';
import { setInStorage } from '../util/storage';

class Login extends Component{

    constructor(props){
        super(props);

        this.state = {
            signInError: '',
            signInEmail: '',
            signInPassword: ''
        }

        this.handleSignInEmailChange = this.handleSignInEmailChange.bind(this);
        this.handleSignInPasswordChange = this.handleSignInPasswordChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    handleSignInEmailChange(event){
        this.setState({
            signInEmail: event.target.value
        });
    }

    handleSignInPasswordChange(event){
        this.setState({
            signInPassword: event.target.value
        });
    }
    
    onLogin(){
        const{
            signInEmail,
            signInPassword
        } = this.state;

        this.setState({
            isLoading:true
        })

        fetch('/api/account/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword
            }),
            
        }).then(res => res.json())
        .then(json => {
            console.log('json', json);
            if (json.success) {
                setInStorage('Money Talk$', {token: json.token});
                this.setState({
                    signInError: json.message,
                    isLoading: false,
                    signInEmail: '',
                    signInPassword: '',
                    token: json.token
                });
            } else {
                this.setState({
                    signInError: json.message,
                    isLoading: false
                })
            }
            
        })
    }

    render(){

        const {
            signInError,
            signInEmail,
            signInPassword
        } = this.state;

        return(
            
            <div className="container">

                {
                    (signInError) ? (
                        <p>{signInError}</p>
                    ) : (null)
                }

                <form>
                    <h2>Log In Here!</h2>
                    <div className="form-group">
                        <label htmlFor="emailInput">Email Address</label>
                        <input type="email" className="form-control" id="loginEmail" placeholder="Enter email" value={signInEmail} onChange={this.handleSignInEmailChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" className="form-control" id="loginPassword" placeholder="Enter Password" value={signInPassword} onChange={this.handleSignInPasswordChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onLogin}>Login!</button>
                </form>
            </div>
        );
    }

}

export default Login;