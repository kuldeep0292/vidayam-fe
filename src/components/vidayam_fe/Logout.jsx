import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService';

class Logout extends Component {
   
    render() {
        return (
            <div>
                <h1>You have been successfully logged out!!</h1>
                <div className="container">
                    Thank you for using our application.
                    {AuthenticationService.disableAxiosInterceptors()}
              </div>
            </div>
        );
    }

}

export default Logout 