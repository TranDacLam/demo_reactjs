import * as types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));

var initialState = data ? data : [];

var cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch(action.type){
        case types.ADD_TO_CARD:
            index = findProductInCard(state, product);
            if(index !== -1){
                state[index].quantity += quantity;
            }else{
                state.push({
                    product, 
                    quantity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.REMOVE_PRODUCT_IN_CART:
            index = findProductInCard(state, action.product);
            if(index !== -1){
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.PLUS_CART_ITEM:
            index = findProductInCard(state, action.product);
            if(index !== -1){
                state[index].quantity += 1;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.SUB_CART_ITEM:
            index = findProductInCard(state, action.product);
            if(index !== -1){
                state[index].quantity -= 1;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

var findProductInCard = (cart, product) => {
    let index = -1;
    if(cart.length > 0){
        index = cart.findIndex(x =>  x.product.id === product.id);
    }   
    return index;
}

export default cart;