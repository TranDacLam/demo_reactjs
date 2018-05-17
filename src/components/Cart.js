import React, { Component } from 'react';
import CartItem from './CartItem';

class Cart extends Component {
    render() {
        return (
            <section className="cart">
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sản phẩm</th>
                                <th>Gía</th>
                                <th>Số lượng</th>
                                <th>Tổng cộng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartItem />
                            <CartItem />
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default Cart;