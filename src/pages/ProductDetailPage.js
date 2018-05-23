import React, { Component } from 'react';
import ProductDetailContainer from './../containers/product-detail/ProductDetailContainer';

class ProductDetailPage extends Component {

    render() {
        var { match } = this.props;
        const id = +match.params.id;
        return (
            <ProductDetailContainer product_id={id}/>
        );
    }
}

export default ProductDetailPage;