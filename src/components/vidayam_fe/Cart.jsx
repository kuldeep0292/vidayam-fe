import React, { Component } from 'react';
import BooksDataService from './api/BooksDataService';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsInCart: [],
            errorMessage: ''
        }
        this.handleError = this.handleError.bind(this)
    }
    render() {
        return (
            <div className="container">
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>CartId</th>
                                <th>BookId</th>
                                <th>Qty</th>
                                <th>Date Added</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.itemsInCart.map(
                                    item =>
                                        <tr key={item.cartid}>
                                            <td>{item.cartid}</td>
                                            <td>{item.bookid}</td>
                                            <td>{item.qty}</td>
                                            <td>{item.dateadded}</td>
                                            <td></td>
                                            <td><button className="btn btn-outline-primary" type="button" onClick={() => this.handleDelete(item.cartid)}>Delete</button></td>
                                            <td></td>
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
       this.refreshCartItems();
    }

    refreshCartItems(){
        BooksDataService.fetchAllItemsInCart().then(response => {
            this.setState({
                itemsInCart: response.data
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
    handleDelete(id) {
        console.log("Delete ")
        BooksDataService.deleteFromCart(id).then(response => {
            this.submit()
            this.refreshCartItems();
        }).catch(error => this.handleError(error))
    }
    submit = () => {
        confirmAlert({
            title: 'Message',
            message: 'Product deleted from cart. Happy Shopping!!',
            buttons: [
                {
                    label: 'Ok',
                }
            ]
        })
    };

}

export default Cart 