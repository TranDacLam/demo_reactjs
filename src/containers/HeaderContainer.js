import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './../components/Header';

class HeaderContainer extends Component {
    render() {
        var { cart } = this.props;
        var total_quantity = this.totalQuantityProductInCart(cart);
        return (
            <Header total_quantity={total_quantity}/>
        );
    }

    totalQuantityProductInCart(cart){
        var total_quantity = 0;
        if(cart.length > 0){
            total_quantity = cart.reduce((total, item, index) => {
                return total += item.quantity;
            }, 0);
        }
        return total_quantity;
    }
}

const mapStatetoProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStatetoProps, null)(HeaderContainer);