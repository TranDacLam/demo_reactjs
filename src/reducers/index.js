import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import message from './message';
import products_apple from './product-apple';
import products_samsung from './product-samsung';
import product_detail from './product-detail';

const appReducers = combineReducers({
    products,
    cart,
    message,
    products_apple,
    products_samsung,
    product_detail
});

export default appReducers;