import React, { Component } from 'react';

class Cart extends Component {
    render() {
        var { children } = this.props;
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
                            { children }
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default Cart;