import { createReducer } from 'redux-create-reducer';
import {
    PHOTO_REQUEST,
    PHOTO_REQUEST_SUCCESS,
    PHOTO_REQUEST_FAILURE,
} from '../actions/photo';

const initialState = {};

export default createReducer(initialState, {
    [PHOTO_REQUEST](state, action) {
        return {
            ...state,
            [action.payload.key]: {
                isFetching: true,
                error: null,
                data: null,
            },
        };
    },

    [PHOTO_REQUEST_SUCCESS](state, action) {
        return {
            ...state,
            [action.payload.key]: {
                isFetching: false,
                error: null,
                data: action.payload.photo,
            },
        };
    },

    [PHOTO_REQUEST_FAILURE](state, action) {
        return {
            ...state,
            [action.payload.key]: {
                isFetching: false,
                error: action.payload.error,
                data: null,
            },
        };
    },
});
