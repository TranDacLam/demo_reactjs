import React, { Component } from 'react';
import CartContainer from './../containers/CartContainer';

class Checkout extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Giỏ Hàng</h1>
                <CartContainer />
            </React.Fragment>
        );
    }
}

export default Checkout;