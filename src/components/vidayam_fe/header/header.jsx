import React, { Component } from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import AuthenticationService from '../AuthenticationService';
import Login from '../login/login';
class Header extends Component {

    render() {
        const isLoggedIn = AuthenticationService.isUserLoggedIn();
        return (
            <header>
                <nav>
                    <div className="navbar navbar-expand-lg navbar-light bg-light">
                        <div>
                            <div className="navbar-brand" href='#'>
                                <img src="images.jpeg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
                                <Link to='/topsellingbooks'> Vidayam</Link>
                            </div>
                        </div>
                        <div>
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search for wisdom!!" aria-label="Search" />
                                <button className="btn btn-outline-success mx-2" type="button"><Link to="/topsellingbooks">Search</Link></button>
                            </form>
                        </div>

                        <div className="navbar-nav navbar-collapse justify-content-end">
                            {isLoggedIn && <div>
                                <div className="dropdown mx-2">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {AuthenticationService.getUserName()}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        {/* <a classNames="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a> */}
                                    </div>
                                </div>
                            </div>
                            }
                            {isLoggedIn &&
                                <div>
                                    <Link to="/cart">
                                        Cart </Link>
                                </div>}
                            {!isLoggedIn && <button className="btn btn-outline-success mx-2" type="button" ><Link to="/login">Login</Link></button>}
                            {isLoggedIn && <button className="btn btn-outline-success mx-2" type="button" onClick={AuthenticationService.logout}><Link to="/logout">Logout</Link></button>}
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default withRouter(Header);