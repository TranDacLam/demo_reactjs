import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from './../actions/index';

class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }

    showProducts(products){
        var result = null;
        var { onAddToCard, onChangeMessage } = this.props;
        if(products.length > 0){
            result = products.map((product, index) => {
                return <Product 
                    key={index} 
                    product={product} 
                    onAddToCard={onAddToCard}
                    onChangeMessage={onChangeMessage}
                />;
            })
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            des: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onAddToCard: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired
};

const mapStatetoProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCard: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductsContainer);