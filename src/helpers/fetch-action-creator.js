/**
 * Inspired by https://github.com/agraboso/redux-api-middleware but much simpler
 * @example
 *     const fetchProducts = () => fetchActionCreator({
 *         url: '/api/products',
 *         types: [REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE],
 *     });
 * @param {Array} types - 3 action constants for request, success & failure or action creator functions
 * @param {String} url
 * @param {Object} [fetchOptions]
 * @return {Function}
 */
export const fetchActionCreator = ({ types, url, fetchOptions }) => dispatch => {
    const actions = typesToActionCreators(types);
    
    dispatch(actions.request());

    return fetch(url, fetchOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        })
        .then(json => dispatch(actions.success(json)))
        .catch(error => dispatch(actions.failure(error)));
};

function typeToActionCreator(type) {
    return typeof type === 'function' ? type : payload => ({ type, payload });
}

function typesToActionCreators(types) {
    const [ request, success, failure ] = types.map(typeToActionCreator);
    return { request, success, failure };
}
