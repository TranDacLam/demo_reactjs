import React, { Component } from 'react';

class ProductDetail extends Component {
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
                    <p>
                        <a className="btn btn-primary" onClick={ () => this.onAddToCard(product_detail)}>
                            <i className="fa fa-shopping-cart"></i> Add to cart
                        </a>
                    </p>
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

    onAddToCard = (product) => {
        this.props.onAddToCard(product);
    }
}

export default ProductDetail;