import React, { Component } from 'react';
import ProductsContainer from './../containers/home/ProductsContainer';
import * as types from './../constants/ActionType';

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>

                        <div className="carousel-inner">
                            <div className="item active">
                                <img src="http://www.banhkemvietnam.vn/upload/hinhanh/231777368185997_1366x450.jpg" alt="Los Angeles" />
                            </div>

                            <div className="item">
                                <img src="http://www.banhkemvietnam.vn/upload/hinhanh/231777368185997_1366x450.jpg" alt="Chicago" />
                            </div>
                        
                            <div className="item">
                                <img src="http://www.banhkemvietnam.vn/upload/hinhanh/231777368185997_1366x450.jpg" alt="New york" />
                            </div>
                        </div>

                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                      </div>
                </div>
                <br/>
                <div className="row">
                    <h2>SAM SUNG</h2>
                    <ProductsContainer category={types.PRODUCTS_SAMSUNG}/>
                </div>
                <div className="row">
                    <h2>APPLE</h2>
                    <ProductsContainer category={types.PRODUCTS_APPLE}/>
                </div>
            </React.Fragment>
        );
    }
}

export default HomePage;