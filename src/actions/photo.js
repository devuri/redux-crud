import {
    GOOGLE_API_ENDPOINT,
    GOOGLE_SEARCH_ENGINE_ID,
    GOOGLE_API_KEY,
} from '../config';
import { encodeParams, fetchActionCreator } from '../helpers/index';

export const PHOTO_REQUEST = 'PHOTO_REQUEST';
export const PHOTO_REQUEST_SUCCESS = 'PHOTO_REQUEST_SUCCESS';
export const PHOTO_REQUEST_FAILURE = 'PHOTO_REQUEST_FAILURE';

const photoRequest = key => ({
    type: PHOTO_REQUEST,
    payload: { key },
});

const photoRequestSuccess = (key, photo) => ({
    type: PHOTO_REQUEST_SUCCESS,
    payload: { key, photo },
});

const photoRequestFailure = (key, error) => ({
    type: PHOTO_REQUEST_FAILURE,
    payload: { key, error },
});

export const fetchPhoto = key => {
    const params = {
        q: `${key}`,
        cx: GOOGLE_SEARCH_ENGINE_ID,
        searchType: 'image',
        fields: 'items(image(height,thumbnailHeight,thumbnailLink,thumbnailWidth,width),link,title)',
        num: 1,
        key: GOOGLE_API_KEY,
    };

    const query = encodeParams(params);

    return fetchActionCreator({
        url: `${GOOGLE_API_ENDPOINT}?${query}`,
        types: [
            () => photoRequest(key),
            json => photoRequestSuccess(key, json.items[0]),
            error => photoRequestFailure(key, error),
        ],
    });
};
