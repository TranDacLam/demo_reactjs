import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

declare var $ :any; // declare Jquery

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
            var active = match ? 'active' : '';
            return (
                <li className={active}>
                    <Link to={to}>
                        {label}
                    </Link>
                </li>
            );
        }}
        />
    );
}

class Header extends Component {

    componentDidMount(){
        $('.nav li').click(function(){
            $('.nav li').removeClass('active');
            $(this).addClass('active');
        });
    }

    render() {
        var { total_quantity } = this.props;
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">TRANNING REACTJS</Link>
                    </div>
            
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            <MenuLink label="Trang Chủ" to="/" activeOnlyWhenExact={true} />
                            <MenuLink label="Sản Phẩm" to="/products" activeOnlyWhenExact={false} />
                            <MenuLink label="Giới thiệu" to="/about" activeOnlyWhenExact={false} />
                            <MenuLink label="Liên hệ" to="/contact" activeOnlyWhenExact={false} />
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/cart">({total_quantity > 0 ? `${total_quantity} sản phẩm` : 'Trống'})<i className="fa fa-shopping-cart"></i> Giỏ hàng</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;