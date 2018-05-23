import callApi from './../utils/call-api';
import { actProductsByCategory, actGetProducts, actGetProductDetail } from './../actions/product';
import { api } from './../utils/api';

export const getProductByCategoryService = (category) => {
    return (dispatch) => {
        return callApi(api.products, 'GET', null).then(
            (result) => {
                dispatch(actProductsByCategory(category, result.data))
            }
        )
    }
}

export const getProductsService = () => {
    return (dispatch) => {
        return callApi(api.products, 'GET', null).then(
            (result) => {
                dispatch(actGetProducts(result.data))
            }
        )
    }
}

export const getProductDetail = (id) => {
    return (dispatch) => {
        return callApi(`${api.products}/${id}`, 'GET', null).then(
            (result) => {
                dispatch(actGetProductDetail(result.data))
            }
        )
    }
}