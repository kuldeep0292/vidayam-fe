import React, { Component } from 'react';
import './login.css'
import AuthenticationService from '../AuthenticationService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isLoginSuccess: false,
            isLoginFailure: false
        }
        // this.handleChangeUserName = this.handleChangeUserName.bind(this)
        // this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.validateJWTLogin = this.validateJWTLogin.bind(this)
    }
    render() {
        return (
            <div className="container">
                <section id="content">
                    {/* <ShowLoginSuccessMsg isLoginSuccess={this.state.isLoginSuccess}></ShowLoginSuccessMsg>
                    <ShowLoginFailureMsg isLoginFailure={this.state.isLoginFailure}></ShowLoginFailureMsg> */}
                    {this.state.isLoginFailure && <div>Invalid Credentials</div>}
                    <form action="">
                        <h1>Login</h1>
                        <div>
                            <input type="text" placeholder="Username" required="" name="username" value={this.state.username} onChange={this.handleChange} />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" required="" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div>
                            <input type="button" value="Log in" onClick={this.validateJWTLogin} />
                            <a href="#">Lost your password?</a>
                            <a href="#">Register</a>
                        </div>

                    </form>
                </section>
            </div>
        );
    }
    // handleChangeUserName(event) {
    //     this.setState({
    //         username: event.target.value
    //     })

    // }
    // handleChangePassword(event) {
    //     this.setState({
    //         password: event.target.value
    //     })

    // }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    // validateLogin() {
    //     AuthenticationService.performBasicAuthentication(this.state.username, this.state.password).then(
    //         () => {
    //             AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
    //             this.props.history.push(`/welcome/${this.state.username}`)
    //         }
    //     ).catch(
    //         () => {
    //             this.setState(
    //                 {
    //                     isLoginSuccess: false,
    //                     isLoginFailure: true
    //                 }
    //             )
    //         }
    //     )
    // }
    validateJWTLogin() {
        AuthenticationService.performJWTAuthentication(this.state.username, this.state.password).then(
            (response) => {
                AuthenticationService.registerSuccessfulLoginForJWT(this.state.username, response.data.token)
                this.props.history.push(`/welcome/${this.state.username}`)
            }
        ).catch(
            () => {
                this.setState(
                    {
                        isLoginSuccess: false,
                        isLoginFailure: true
                    }
                )
            }
        )
    }
}

// function ShowLoginSuccessMsg(props) {
//     if (props.isLoginSuccess) {
//         return <div>Valid Credentials</div>
//     } else
//         return null;
// }
// function ShowLoginFailureMsg(props) {
//     if (props.isLoginFailure) {
//         return <div>InValid Credentials</div>
//     }
//     else
//         return null;
// }
export default Login;