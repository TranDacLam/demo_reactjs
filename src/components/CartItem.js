import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        return (
            <tr className="info-cart-item">
                <td><img src="http://vnreview.vn/image/17/67/26/1767266.jpg?t=1518484342718" alt="Nature" /></td>
                <td>Iphone X</td>
                <td>1000$</td>
                <td className="btn-group">
                    <button type="button" className="btn btn-danger"> - </button>
                    <button className="btn btn-primary">1</button>
                    <button type="button" className="btn btn-danger"> + </button>
                </td>
                <td>1000$</td>
                <td> <button type="button" className="btn btn-danger"> x </button></td>
            </tr>
        );
    }
}

export default CartItem;