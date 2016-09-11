import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from '../../components/product-list';

it('ProductList renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
        isFetching: false,
        error: null,
        products: [],
        photos: {},
        onProductClick: function() {},
    };

    ReactDOM.render(<ProductList {...props} />, div);
});
