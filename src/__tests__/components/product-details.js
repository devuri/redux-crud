import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetails from '../../components/product-details';

it('ProductDetails renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
        product: {},
        photo: null,
        onSave: function() {},
        onClose: function() {},
    };

    ReactDOM.render(<ProductDetails {...props} />, div);
});
