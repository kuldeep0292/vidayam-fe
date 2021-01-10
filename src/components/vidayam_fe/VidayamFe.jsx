import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './login/login';
import Logout from './Logout';
import Homepage from './homepage/homepage';
import TopSellingBooks from './homepage/TopSellingBooks';
import Header from './header/header';
import Footer from './footer/footer';
import Cart from './Cart';
import '../../App.css';
import Checkout from './Checkout/Checkout';

class VidayamFe extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }
    render() {
        return (
            <div className="vidayam">
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route path="/" exact component={Login}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/welcome/:name" component={Homepage}></Route>
                        <Route path="/topsellingbooks" component={TopSellingBooks}></Route>
                        <Route path="/logout" component={Logout}></Route>
                        <Route path="/cart" component={Cart}></Route>
                        <Route path="/checkout" component={Checkout}></Route>
                        <Route component={ErrorComponent}></Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </div>
        );
    }

}

function ErrorComponent() {
    return <div>Oops, this is embarassing!! An error has occurred, please contact support@vidayam.com !!</div>
}

export default VidayamFe 