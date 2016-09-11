import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { fetchProductList } from '../actions/product';
import ProductList from '../components/product-list';

export class ProductListContainer extends Component {

    componentWillMount() {
        if (!this.props.productList.isFetching) {
            this.props.fetchProductList();
        }
    }

    onProductClick(id) {
        this.props.push(`/${id}`);
    }

    render() {
        const { productList: { isFetching, error, data }, photos, children } = this.props;

        return (
            <div>
                <ProductList
                    isFetching={isFetching}
                    error={error}
                    products={data}
                    photos={photos}
                    onProductClick={id => this.onProductClick(id)}
                />
                {children}
            </div>
        );
    }
}

export default connect(
    ({ productList, photos }) => ({ productList, photos }),
    { fetchProductList, push },
)(ProductListContainer);
