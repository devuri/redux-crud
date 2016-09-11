import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import productList from './product-list';
import photos from './photos';

export default combineReducers({
	routing: routerReducer,
    productList,
    photos,
});
