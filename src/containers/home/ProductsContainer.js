import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './../../components/Product';
import PropTypes from 'prop-types';
import { actAddToCart } from './../../actions/index';
import { getProductByCategoryService } from './../../services/ProductService';
import * as types from './../../constants/ActionType';

class ProductsContainer extends Component {

    componentDidMount() {
        this.props.fetchAllProducts(this.props.category);
    }

    render() {
        var { category } = this.props;
        var list = [];
        if(category === types.PRODUCTS_SAMSUNG){
            list = this.props.products_samsung;
        }else if(category === types.PRODUCTS_APPLE){
            list = this.props.products_apple;
        }

        return (
            <React.Fragment>
                {this.showProducts(list)}
            </React.Fragment>
        );
    }

    showProducts(products){
        var result = null;
        var { onAddToCard } = this.props;
        if(products.length > 0){
            result = products.map((product, index) => {
                return <Product 
                    key={index} 
                    product={product} 
                    onAddToCard={onAddToCard}
                />;
            })
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    products_samsung: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            des: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            cateogry_id: PropTypes.number.isRequired
        })
    ),
    products_apple: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            des: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            cateogry_id: PropTypes.number.isRequired
        })
    ),
    onAddToCard: PropTypes.func.isRequired,
    fetchAllProducts: PropTypes.func.isRequired
};

const mapStatetoProps = state => {
    return {
        products_samsung: state.products_samsung,
        products_apple: state.products_apple
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCard: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        fetchAllProducts: (category) => {
            dispatch(getProductByCategoryService(category));
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductsContainer);