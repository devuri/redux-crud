import fetchMock from 'fetch-mock';
import { fetchActionCreator } from '../../helpers/fetch-action-creator';

const API_URL = '/test-api';
const REQUEST = 'REQUEST';
const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const REQUEST_FAILURE = 'REQUEST_FAILURE';

describe('fetchActionCreator', () => {

    let dispatch, response;

    beforeEach(() => {
        fetchMock.restore();
        response = { test: 'passed!' };
        dispatch = jest.fn();
    });

    const testFetch = types => {
        return fetchActionCreator({
            types,
            url: API_URL,
        })(dispatch).then(() => {
            // dispatch() should have been called with { type: REQUEST }
            expect(dispatch.mock.calls[0][0].type).toBe(REQUEST);

            // followed by dispatch({ type: REQUEST_SUCCESS, payload: { test: 'passed!' } })
            expect(dispatch.mock.calls[1][0].type).toBe(REQUEST_SUCCESS);
            expect(dispatch.mock.calls[1][0].payload).toEqual(response);
        }).catch(() => {
            // fails with { type: REQUEST_FAILURE }
            expect(dispatch.mock.calls[1][0].type).toBe(REQUEST_FAILURE);
        });
    };

    it('should dispatch REQUEST and REQUEST_SUCCESS actions', () => {
        fetchMock.get(API_URL, response);
        return testFetch([REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE]);
    });

    it('should dispatch REQUEST and REQUEST_SUCCESS action creator functions', () => {
        fetchMock.get(API_URL, response);
        return testFetch([
            () => ({ type: REQUEST }),
            json => ({ type: REQUEST_SUCCESS, payload: json }),
            error => ({ type: REQUEST_FAILURE, payload: error }),
        ]);
    });

    it('should dispatch REQUEST_SUCCESS_FAILURE action if response.ok is false', () => {
        fetchMock.get(API_URL, 500);
        return testFetch([REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE]);
    });

    it('should dispatch REQUEST_SUCCESS_FAILURE action if json is invalid', () => {
        fetchMock.get(API_URL, 'asd');
        return testFetch([REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE]);
    });
});