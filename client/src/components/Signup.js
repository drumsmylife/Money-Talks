import React, {Component} from 'react';

class Signup extends Component{

    constructor(props){
        super(props);

        this.state = {
            signUpError: '',
            signUpFirstName: '',
            signUpLastName: '',
            signUpEmail: '',
            signUpPassword: ''
        }

        this.handleSignUpFirstNameChange = this.handleSignUpFirstNameChange.bind(this);
        this.handleSignUpLastNameChange = this.handleSignUpLastNameChange.bind(this);
        this.handleSignUpEmailChange = this.handleSignUpEmailChange.bind(this);
        this.handleSignUpPasswordChange = this.handleSignUpPasswordChange.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
    }

    handleSignUpFirstNameChange(event){
        this.setState({
            signUpFirstName: event.target.value
        });
    }

    handleSignUpLastNameChange(event){
        this.setState({
            signUpLastName: event.target.value
        });
    }

    handleSignUpEmailChange(event){
        this.setState({
            signUpEmail: event.target.value
        });
    }

    handleSignUpPasswordChange(event){
        this.setState({
            signUpPassword: event.target.value
        });
    }

    onSignUp (){
        const{
            signUpFirstName,
            signUpLastName,
            signUpEmail,
            signUpPassword
        } = this.state;

        this.setState({
            isLoading:true
        })

        fetch('/api/account/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: signUpFirstName,
                lastName: signUpLastName,
                email: signUpEmail,
                password: signUpPassword
            }),
            
        }).then(res => res.json())
        .then(json => {
            console.log('json', json);
            if (json.success) {
                this.setState({
                    signUpError: json.message,
                    isLoading: false,
                    signUpFirstName: '',
                    signUpLastName: '',
                    signUpEmail: '',
                    signUpPassword: ''
                });
            } else {
                this.setState({
                    signUpError: json.message,
                    isLoading: false
                })
            }
            
        })
    }

    render(){

        const{
            signUpError,
            signUpFirstName,
            signUpLastName,
            signUpEmail,
            signUpPassword
        } = this.state;

        return(
            <div className="container">

                {
                    (signUpError) ? (
                        <p>{signUpError}</p>
                    ) : (null)
                }

                <form>
                    <h2>Don't Have an Account yet? Sign Up!</h2>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" value={signUpFirstName} onChange={this.handleSignUpFirstNameChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" value={signUpLastName} onChange={this.handleSignUpLastNameChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailInput">Email Address</label>
                        <input type="email" className="form-control" id="signUpEmail" placeholder="Enter email" value={signUpEmail} onChange={this.handleSignUpEmailChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" className="form-control" id="signUpPassword" placeholder="Enter Password" value={signUpPassword} onChange={this.handleSignUpPasswordChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onSignUp}>Sign Up!</button>
                </form>
            </div>
        );
    }

}

export default Signup; 