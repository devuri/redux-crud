import React, { Component } from 'react';
import Photo from './photo';
import { getPhotoKeyFromProduct } from '../selectors/photo';

export default class ProductList extends Component {

    renderList(products, photos, onProductClick) {
        return (
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id} onClick={() => onProductClick(product.id)}>
                                <td>
                                    <Photo photo={photos[getPhotoKeyFromProduct(product)]} size="thumbnail" />
                                </td>
                                <td>{product.name}</td>
                                <td>{product.amount}</td>
                                <td>{product.description}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4">
                                <span className="pull-right">Total products: {products.length}</span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }

    renderError({ code, message }) {
        return (
            <div className="alert alert-danger" role="alert">
                <strong>Error {code}</strong>
                <span>{message}</span>
            </div>
        );
    }

    renderFetching() {
        return (
            <p>Loading ...</p>
        );
    }

    render() {
        const { isFetching, error, products, photos, onProductClick } = this.props;

        return (
            <div className="row">
                {error && this.renderError(error)}
                {isFetching && this.renderFetching()}
                {!isFetching && this.renderList(products, photos, onProductClick)}
            </div>
        );
    }
}

ProductList.propTypes = {
    isFetching: React.PropTypes.bool,
    error: React.PropTypes.object,
    products: React.PropTypes.array.isRequired,
    photos: React.PropTypes.object.isRequired,
    onProductClick: React.PropTypes.func.isRequired,
};
