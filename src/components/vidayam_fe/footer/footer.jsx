import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {

    render() {
        return (
            <nav className="navbar fixed-bottom navbar-light bg-light">
                <footer className="footer">
                    <div className="navbar-brand" ><span className="text-muted">All Rights Reserved 2020 @vidayam</span></div>
                </footer>
            </nav>
        );
    }
}
export default Footer;