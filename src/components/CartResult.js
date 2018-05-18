import React, { Component } from 'react';

class CartResult extends Component {
    render() {
        var { cart } = this.props;
        return (
            <tr className="cart-result">
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <h4><strong>Tổng Tiền</strong></h4>
                </td>
                <td>
                    <h4><strong>{this.totalAmount(cart)}$</strong></h4>
                </td>
                <td colSpan="3">
                    <button className="btn btn-primary">Complete purcha</button>
                </td>
            </tr>
        );
    }

    totalAmount(cart){
        var total = 0;
        for(let i=0; i<cart.length; i++){
            total += cart[i].product.price * cart[i].quantity;
        }
        return total;
    }
}

export default CartResult;