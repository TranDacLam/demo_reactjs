import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import { 
    actRemoveProductInCart, 
    actChangeMessage,
    actPlusCartItem,
    actSubCartItem
 } from './../actions/index';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showCartResult(cart)}
            </Cart>
        );
    }

    showCartItem(cart){
        var result = null;
        var { onDelCartItem, onChangeMessage, onPlusCartItem, onSubCartItem } = this.props;
        if(cart.length > 0){
            result = cart.map((cart_item, index) => {
                return <CartItem 
                        key={index} 
                        cart_item={cart_item}
                        onDelCartItem={onDelCartItem}
                        onChangeMessage={onChangeMessage}
                        onPlusCartItem={onPlusCartItem}
                        onSubCartItem={onSubCartItem}
                    />
            })
        }
        return result;
    }

    showCartResult(cart){
        var result = null;
        if(cart.length > 0){
            return <CartResult cart={cart} />
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            des: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }),
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onDelCartItem: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onPlusCartItem: PropTypes.func.isRequired,
    onSubCartItem: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelCartItem: (product) => {
            dispatch(actRemoveProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message))
        },
        onPlusCartItem: (product) => {
            dispatch(actPlusCartItem(product));
        },
        onSubCartItem: (product) => {
            dispatch(actSubCartItem(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);