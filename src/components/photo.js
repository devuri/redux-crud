import React from 'react';

const Photo = ({ photo, size }) => {
    if (!photo || photo.error) {
        return null;
    }

    if (photo.isFetching) {
        return <i className="fa fa-refresh fa-spin"></i>;
    }

    const data = photo.data;
    if (!data) {
        return null;
    }

    const src = size === 'thumbnail' ? data.image.thumbnailLink : data.link;
    return (
        <img className="img-responsive" src={src} alt={data.title} title={data.title} />
    );
}

Photo.propTypes = {
    photo: React.PropTypes.object,
    size: React.PropTypes.oneOf(['thumbnail', 'large']),
};

export default Photo;
