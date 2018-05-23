import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProductDetail } from './../../services/ProductService';
import ProductDetail from './../../components/ProductDetail';
import { actAddToCart } from './../../actions/index';

class ProductDetailContainer extends Component {

    componentDidMount(){
        var { product_id } = this.props;
        this.props.fetchProductDetail(product_id);
    }

    render() {
        var { product_detail, onAddToCard } = this.props;
        return (
            <ProductDetail product_detail={product_detail} onAddToCard={onAddToCard}/>
        );
    }

    showRatings(rating){
        var result = [];
        for(let i=0; i < 5; i++){
            if(i < rating){
                result.push(<li key={i}><i className="fa fa-star"></i></li>);
            }else{
                result.push(<li key={i}><i className="fa fa-star-o"></i></li>);
            }
        }
        return result;
    }
}

ProductDetailContainer.propTypes = {
    product_detail:  PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string,
        des: PropTypes.string,
        inventory: PropTypes.number,
        rating: PropTypes.number
    }),
    fetchProductDetail: PropTypes.func.isRequired,
    onAddToCard: PropTypes.func.isRequired
};

const mapStatetoProps = state => {
    return {
        product_detail: state.product_detail
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchProductDetail: (product_id) => {
            dispatch(getProductDetail(product_id));
        },
        onAddToCard: (product) => {
            dispatch(actAddToCart(product, 1));
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductDetailContainer);