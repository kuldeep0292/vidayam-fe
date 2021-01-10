import React, { Component } from 'react';
import BooksDataService from '../api/BooksDataService';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class TopSellingBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            errorMessage: '',
        }
        this.handleError = this.handleError.bind(this)
        this.saveToCart = this.saveToCart.bind(this)
    }
    render() {
        return (

            <div className="container">
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Language</th>
                                <th>Rating</th>
                                <th>RatingUsers</th>
                                <th>SellingPrice</th>
                                <th>ActualPrice</th>
                                <th>Discount</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.books.map(
                                    book =>
                                        <tr key={book.id}>
                                            <td>{book.description}</td>
                                            <td>{book.language}</td>
                                            <td>{book.rating}</td>
                                            <td>{book.ratingUsers}</td>
                                            <td>{book.sellingprice}</td>
                                            <td>{book.actualprice}</td>
                                            <td>{book.discount}</td>
                                            <td></td>
                                            <td><button className="btn btn-outline-primary" type="button" onClick={() => this.saveToCart(book.id)}>Add</button></td>
                                            <td></td>
                                            <td><button className="btn btn-outline-success" type="button">Buy</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className='container'>{this.state.errorMessage}</div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        BooksDataService.fetchAllBooks().then(response => {
            this.setState({
                books: response.data
            })
        }).catch(error => this.handleError(error))
    }

    handleError(error) {
        console.log(error.response)
        let message = ''

        if (error.message)
            message += error.message

        if (error.response && error.response.data) {
            message += error.response.data.message
        }
        this.setState({
            errorMessage: message
        })
    }
    saveToCart(id) {
        BooksDataService.saveToCart(id).then(response => {
            this.submit()
        }).catch(error => this.handleError(error))
    }

    submit = () => {
        confirmAlert({
            title: 'Confirm',
            message: 'Do you want to checkout?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => { this.props.history.push(`/checkout`)}
                },
                {
                    label: 'Continue Shopping',
                }
            ]
        })
    };
}

export default TopSellingBooks



