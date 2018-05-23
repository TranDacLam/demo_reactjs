import * as types from './../constants/ActionType';

export const actProductsByCategory = (category, products) => {
    return {
        type: category,
        products
    }
}

export const actGetProducts = (products) => {
    return {
        type: types.FETCH_AL_PRODUCT,
        products
    }
}

export const actGetProductDetail = (product) => {
    return {
        type: types.FETCH_PRODUCT_DETAIL,
        product
    }
}