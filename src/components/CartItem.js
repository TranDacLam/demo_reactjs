import React, { Component } from 'react';
import * as msg from './../constants/Message';

class CartItem extends Component {
    render() {
        var { cart_item } = this.props;
        return (
            <tr className="info-cart-item">
                <td><img src={cart_item.product.image} alt={cart_item.product.name} /></td>
                <td>{cart_item.product.name}</td>
                <td>{cart_item.product.price}$</td>
                <td className="btn-group">
                    <button type="button" className="btn btn-danger"
                        onClick={ () => this.onQuantityCartItem(cart_item.product, 'sub')}
                    > - </button>
                    <button className="btn btn-primary">{cart_item.quantity}</button>
                    <button type="button" className="btn btn-danger"
                        onClick={ () => this.onQuantityCartItem(cart_item.product, 'plus')}
                    > + </button>
                </td>
                <td>{this.subTotal(cart_item.product.price, cart_item.quantity)}$</td>
                <td> 
                    <button type="button" className="btn btn-danger"
                        onClick={ ()=> this.onDelCartItem(cart_item.product)}
                    > x </button>
                </td>
            </tr>
        );
    }

    onQuantityCartItem = (product, status) => {
        if(status === 'plus'){
            this.props.onPlusCartItem(product);
        }else{
            this.props.onSubCartItem(product);
        }
        this.props.onChangeMessage(msg.MSG_UPDATE_CART_SUCCESS);
    }

    onDelCartItem = (product) => {
        this.props.onDelCartItem(product);
        this.props.onChangeMessage(msg.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    subTotal(price, quantity){
        return price * quantity;
    }
}

export default CartItem;