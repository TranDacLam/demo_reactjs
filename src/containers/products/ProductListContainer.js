import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../../components/Products';
import Product from './../../components/Product';
import PropTypes from 'prop-types';
import { actAddToCart } from './../../actions/index';
import { getProductsService } from './../../services/ProductService';
import Pagination from './../../components/Pagination';

class ProductsContainer extends Component {

    constructor() {
        super();

        this.state = {
            pageOfItems: []
        };
    }

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    render() {
        var { products } = this.props;
        return (
            <React.Fragment>
                <Products>
                    {this.showProducts(this.state.pageOfItems)}
                </Products>
                <Pagination items={products} onChangePage={this.onChangePage} />
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

    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
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