import { PRODUCT_API_ENDPOINT } from '../config';
import { fetchActionCreator } from '../helpers/index';

export const PRODUCT_REQUEST = 'PRODUCT_REQUEST';
export const PRODUCT_REQUEST_SUCCESS = 'PRODUCT_REQUEST_SUCCESS';
export const PRODUCT_REQUEST_FAILURE = 'PRODUCT_REQUEST_FAILURE';

export const PRODUCT_UPDATE_REQUEST = 'PRODUCT_UPDATE_REQUEST';
export const PRODUCT_UPDATE_REQUEST_SUCCESS = 'PRODUCT_UPDATE_REQUEST_SUCCESS';
export const PRODUCT_UPDATE_REQUEST_FAILURE = 'PRODUCT_UPDATE_REQUEST_FAILURE';

export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_REQUEST_SUCCESS = 'PRODUCT_LIST_REQUEST_SUCCESS';
export const PRODUCT_LIST_REQUEST_FAILURE = 'PRODUCT_LIST_REQUEST_FAILURE';

const fetchOptions = {
    headers: {
        'Content-Type': 'application/json',
    },
};

const updateProductRequest = id => ({
    type: PRODUCT_UPDATE_REQUEST,
    payload: { id },
});

const updateProductRequestSuccess = (id, changes) => ({
    type: PRODUCT_UPDATE_REQUEST_SUCCESS,
    payload: { id, changes },
});

const updateProductRequestFailure = (id, error) => ({
    type: PRODUCT_UPDATE_REQUEST_FAILURE,
    payload: { id, error },
});

export const updateProduct = (id, { name, description }) => {
    return fetchActionCreator({
        fetchOptions: {
            ...fetchOptions,
            method: 'put',
            body: JSON.stringify({ name, description }),
        },
        url: `${PRODUCT_API_ENDPOINT}/products/${id}`,
        types: [
            () => updateProductRequest(id),
            json => updateProductRequestSuccess(id, json),
            error => updateProductRequestFailure(id, error),
        ],
    });
};

export const fetchProduct = id => {
    return fetchActionCreator({
        fetchOptions,
        url: `${PRODUCT_API_ENDPOINT}/products/${id}`,
        types: [PRODUCT_REQUEST, PRODUCT_REQUEST_SUCCESS, PRODUCT_REQUEST_FAILURE],
    });
};

export const fetchProductList = () => {
    return fetchActionCreator({
        fetchOptions,
        url: `${PRODUCT_API_ENDPOINT}/products`,
        types: [PRODUCT_LIST_REQUEST, PRODUCT_LIST_REQUEST_SUCCESS, PRODUCT_LIST_REQUEST_FAILURE],
    });
};
