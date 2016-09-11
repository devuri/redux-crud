import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { fetchProduct, updateProduct } from '../actions/product';
import { getPhotoKeyFromProduct } from '../selectors/photo';
import { getProduct } from '../selectors/product';
import ProductDetails from '../components/product-details';

class ProductDetailsContainer extends Component {

    constructor() {
        super(...arguments);

        this.onClose = this.onClose.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onClose() {
        this.props.push('/');
    }

    onSave(formData) {
        this.props.updateProduct(this.props.product.id, formData);
    }

    render() {
        const { product, photo } = this.props;

        if (!product) {
            return null;
        }

        return (
            <ProductDetails
                product={product}
                photo={photo}
                onSave={this.onSave}
                onClose={this.onClose}
            />
        );
    }
    
}

export default connect(
    (state, ownProps) => {
        const product = getProduct(state, ownProps.params.id);
        const photo = product ? state.photos[getPhotoKeyFromProduct(product)] : null;

        return {
            product,
            photo,
        };
    },
    { fetchProduct, updateProduct, push },
)(ProductDetailsContainer);
