import * as types from './../constants/ActionType'; 
var initialState = [];

var products_samsung = (state = initialState, action) => {
    switch(action.type){
        case types.PRODUCTS_SAMSUNG:
            state = action.products.filter(x => x.cateogry_id === 1);
            return [...state];
        default: return [...state];
    }
}

export default products_samsung;