import React, { Component } from 'react';

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
    }

    onDelCartItem = (product) => {
        if(confirm('Bạn chắc chắn muốn xóa?')){ //eslint-disable-line
            this.props.onDelCartItem(product);
        }
    }

    subTotal(price, quantity){
        return price * quantity;
    }
}

export default CartItem;