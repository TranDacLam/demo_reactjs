import React, { Component } from 'react';
import MessageContainer from './../containers/MessageContainer';
import CartContainer from './../containers/CartContainer';

class Checkout extends Component {
    render() {
        return (
            <React.Fragment>
                <MessageContainer />
                <CartContainer />
            </React.Fragment>
        );
    }
}

export default Checkout;