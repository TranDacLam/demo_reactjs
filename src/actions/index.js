import * as types from './../constants/ActionType';

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CARD,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}

export const actRemoveProductInCart = (product) => {
    return {
        type: types.REMOVE_PRODUCT_IN_CART,
        product
    }
}

export const actPlusCartItem = (product) => {
    return {
        type: types.PLUS_CART_ITEM,
        product
    }
}

export const actSubCartItem = (product) => {
    return {
        type: types.SUB_CART_ITEM,
        product
    }
}