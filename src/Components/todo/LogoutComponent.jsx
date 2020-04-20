import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

class LogoutComponent extends Component{
    render(){
        return(
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank you for using our application.
                </div>
            </>
        )
    }
}

export default LogoutComponent