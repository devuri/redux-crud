import React from 'react';
import ReactDOM from 'react-dom';
import Photo from '../../components/Photo';

it('Photo renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
        photo: null,
        size: 'thumbnail',
    };
    
    ReactDOM.render(<Photo {...props} />, div);
});
