import * as types from './../constants/ActionType'; 
var initialState = {};

var product_detail = (state = initialState, action) => {
    switch(action.type){
        case types.FETCH_PRODUCT_DETAIL:
            state = action.product;
            return {...state};
        default: return {...state};
    }
}

export default product_detail;