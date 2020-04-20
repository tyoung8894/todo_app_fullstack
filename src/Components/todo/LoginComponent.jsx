import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'


//in jsx, can not return multiple elements without a div tag
class LoginComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: 'Tyler',
            password: '',
            loginFailed : false,
            showSuccessMessage : false
        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    //everything in jsx expression gets converted to js and returned as a js expression
    render() {
        return (
            <div>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCredentials> */}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}></ShowLoginSuccessMessage> */}

                <h1>Login</h1>

                <div className="container">            
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}    
                    {this.state.showSuccessMessage && <div>Login Successful</div>}    

                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>

                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>

            </div>
        )
    }

    //only works when form elements have same name as the state variable
    handleChange(event){
        //console.log(event.target.value);
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    loginClicked() {
        console.log(this.state);
        if(this.state.username==='Tyler' && this.state.password==='dummy'){    

            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);  //React Router history api, redirects to welcome page

            // this.setState({
            //     showSuccessMessage : true,
            //     hasLoginFailed : false
            // })

        } else{
            this.setState({
                showSuccessMessage: false,
                hasLoginFailed : true            
            })
        }
    }

}

function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div>
    }
    return null;
}

function ShowLoginSuccessMessage(props){
    if(props.showSuccessMessage){
        return <div>Login Successful</div>
    }
    return null;
}



export default LoginComponent