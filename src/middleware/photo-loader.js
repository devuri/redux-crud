import {
    PRODUCT_LIST_REQUEST_SUCCESS,
    PRODUCT_UPDATE_REQUEST_SUCCESS,
} from '../actions/product';
import { fetchPhoto } from '../actions/photo';
import { getPhotoKeyFromProduct } from '../selectors/photo';

const fetchPhotoIfNotExists = (dispatch, product, photos) => {
    const key = getPhotoKeyFromProduct(product);
    const photo = photos[key];

    if (!photo) {
        dispatch(fetchPhoto(key));
    }
};

const photoLoaderMiddleware = ({ getState, dispatch }) => next => action => {

    const result = next(action);

    // Initial photo load
    if (action.type === PRODUCT_LIST_REQUEST_SUCCESS) {
        const { photos } = getState();
        action.payload.forEach(product => (
            fetchPhotoIfNotExists(dispatch, product, photos)
        ));
    }

    // Reload product photo
    if (action.type === PRODUCT_UPDATE_REQUEST_SUCCESS) {
        const { photos } = getState();
        const product = action.payload.changes;
        fetchPhotoIfNotExists(dispatch, product, photos);
    }

    return result;
};

export default photoLoaderMiddleware;
