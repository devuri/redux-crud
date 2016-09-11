import React, { Component } from 'react';
import Modal from '../components/modal';
import Photo from '../components/photo';

export default class ProductDetails extends Component {

    constructor() {
        super(...arguments);

        this.onSave = this.onSave.bind(this);
    }

    onSave() {
        this.props.onSave({
            name: this.refs.name.value,
            amount: this.refs.amount.value,
            description: this.refs.description.value,
        });
    }

    render() {
        const { product, photo, onClose } = this.props;

        return (
            <Modal onClose={onClose}>
                <div className="modal-header">
                    <button type="button" className="close" aria-label="Close" onClick={onClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 className="modal-title">Edit product</h4>
                </div>
                <div className="modal-body">
                    <div className="row product-details-container">
                        <div className="col-sm-6 text-center">
                            <Photo photo={photo} size="large" />
                        </div>
                        <div className="col-sm-6">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="product-name">Name</label>
                                    <input type="text" className="form-control" id="product-name" defaultValue={product.name} ref="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="product-amount">Amount</label>
                                    <input type="number" className="form-control" id="product-amount" defaultValue={product.amount} ref="amount" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="product-description">Description</label>
                                    <textarea rows="2" className="form-control" id="product-description" defaultValue={product.description} ref="description"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" onClick={onClose}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={this.onSave}>Save changes</button>
                </div>
            </Modal>
        );
    }
}

ProductDetails.propTypes = {
    product: React.PropTypes.object.isRequired,
    photo: React.PropTypes.object,
    onSave: React.PropTypes.func.isRequired,
    onClose: React.PropTypes.func.isRequired,
};
