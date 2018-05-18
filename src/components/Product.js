import React, { Component } from 'react';
import * as msg from './../constants/Message';

class Product extends Component {

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

    onAddToCard = (product) => {
        this.props.onAddToCard(product);
        this.props.onChangeMessage(msg.MSG_ADD_TO_CART_SUCCESS);
    }

    render() {
        var { product } = this.props;
        return (
            <div className="col-md-4">
                <div className="thumbnail">
                    <img src={product.image} alt={product.name} />
                    <div className="caption">
                        <h3>{product.name}</h3>
                        <ul className="rating">
                            { this.showRatings(product.rating)}
                        </ul>
                        <p>{product.des}</p>
                        <h4>Price: {product.price}$</h4>
                        <p>
                            <a className="btn btn-primary" onClick={ () => this.onAddToCard(product)}>
                                <i className="fa fa-shopping-cart"></i> Add to cart
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;