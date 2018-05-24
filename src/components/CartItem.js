import React, { Component } from 'react';

declare var toastr: any; // declare Jquery

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
                        onClick={ () => this.onQuantityCartItem(cart_item.product, cart_item.quantity, 'sub')}
                    > - </button>
                    <button className="btn btn-primary">{cart_item.quantity}</button>
                    <button type="button" className="btn btn-danger"
                        onClick={ () => this.onQuantityCartItem(cart_item.product, cart_item.quantity, 'plus')}
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

    onQuantityCartItem = (product, quantity, status) => {
        if(status === 'plus'){
            if(quantity < product.inventory){
                this.props.onPlusCartItem(product);
                toastr.success('Cập nhấp giỏ hàng thành công');
            }else{
                toastr.warning('Vui lòng nhập số sản phẩm mua nhỏ hơn số sản phẩm tồn kho!');
            }
        }else{
            if(quantity > 1){
                this.props.onSubCartItem(product);
                toastr.success('Cập nhấp giỏ hàng thành công');
            }else{
                this.onDelCartItem(product);
                toastr.success('Xóa giỏ hàng thành công');
            }
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