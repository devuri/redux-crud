import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../../components/Modal';

it('Modal renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
        onClose: function() {},
    };
    
    ReactDOM.render(<Modal {...props} />, div);
});
