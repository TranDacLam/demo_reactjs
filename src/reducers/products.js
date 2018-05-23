import * as types from './../constants/ActionType'; 
var initialState = [];

var products = (state = initialState, action) => {
    switch(action.type){
        case types.FETCH_AL_PRODUCT:
            state = action.products
            return [...state];
        default: return [...state];
    }
}

export default products;