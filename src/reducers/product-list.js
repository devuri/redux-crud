import { createReducer } from 'redux-create-reducer';
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_REQUEST_SUCCESS,
    PRODUCT_LIST_REQUEST_FAILURE,
    PRODUCT_UPDATE_REQUEST_SUCCESS,
} from '../actions/product';

const initialState = {
    isFetching: false,
    error: null,
    data: [],
};

export default createReducer(initialState, {
    [PRODUCT_LIST_REQUEST](state, action) {
        return {
            ...state,
            isFetching: true,
            error: null,
        };
    },

    [PRODUCT_LIST_REQUEST_SUCCESS](state, action) {
        return {
            ...state,
            isFetching: false,
            data: action.payload,
        };
    },

    [PRODUCT_LIST_REQUEST_FAILURE](state, action) {
        return {
            ...state,
            isFetching: false,
            error: action.payload,
        };
    },

    [PRODUCT_UPDATE_REQUEST_SUCCESS](state, action) {
        // Replace product data with changes
        const { id, changes } = action.payload;
        return {
            ...state,
            data: [
                ...state.data.map(product => product.id === id ? changes : product),
            ]
        }
    }
});
