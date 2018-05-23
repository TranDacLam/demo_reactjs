import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../../components/Products';
import Product from './../../components/Product';
import PropTypes from 'prop-types';
import { actAddToCart } from './../../actions/index';
import { getProductsService } from './../../services/ProductService';

class ProductsContainer extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

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
    products: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            des: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onAddToCard: PropTypes.func.isRequired
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
        fetchAllProducts: () => {
            dispatch(getProductsService());
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductsContainer);