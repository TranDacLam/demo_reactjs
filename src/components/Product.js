import React, { Component } from 'react';

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

    render() {
        var { product } = this.props;
        return (
            <div className="col-md-4">
                <div className="thumbnail">
                    <a href="#" target="_blank">
                        <img src={product.image} alt={product.name} />
                        <div className="caption">
                            <h3>{product.name}</h3>
                            <ul className="rating">
                                { this.showRatings(product.rating)}
                            </ul>
                            <p>{product.des}</p>
                            <h4>Price: {product.price}$</h4>
                            <p>
                                <button className="btn btn-primary">
                                    <i className="fa fa-shopping-cart"></i> Add to cart
                                </button>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Product;