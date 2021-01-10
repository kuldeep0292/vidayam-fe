import React, { Component } from 'react';
import BooksDataService from '../api/BooksDataService'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class Homepage extends Component {
    constructor() {
        super();
        this.state = {
        }

    }
    render() {
        return (
            <>
                <div className="container">
                    <div>Welcome Home {this.props.match.params.name} !!</div>
                    <h4> Find the top selling books <Link to='/topsellingbooks'>here</Link></h4>
                </div>
            </>
        );
    }
}

export default Homepage 