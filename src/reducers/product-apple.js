import * as types from './../constants/ActionType'; 
var initialState = [];

var products_apple = (state = initialState, action) => {
    switch(action.type){
        case types.PRODUCTS_APPLE:
            state = action.products.filter(x => x.cateogry_id === 2);
            return [...state];
        default: return [...state];
    }
}

export default products_apple;