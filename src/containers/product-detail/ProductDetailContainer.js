import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProductDetail } from './../../services/ProductService';

class ProductDetailContainer extends Component {

    componentDidMount(){
        var { product_id } = this.props;
        this.props.fetchProductDetail(product_id);
    }

    render() {
        var { product_detail } = this.props;
        return (
            <div className="row">
                <h1>Sản Phẩm</h1><br/><br/><br/>
                <div className="col-xs-6 col-sm-6">
                    <img src={product_detail.image} alt={product_detail.name}/>
                </div>
                <div className="col-xs-6 col-sm-6">
                    <h3>{product_detail.name}</h3>
                    <ul className="rating">{this.showRatings(product_detail.rating)}</ul>
                    <p>{product_detail.des}</p>
                </div>
            </div> 
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
    fetchProductDetail: PropTypes.func.isRequired
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
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductDetailContainer);