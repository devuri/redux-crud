import React, { Component } from 'react';

export default class Modal extends Component {

    constructor() {
        super(...arguments);

        this.onBackdropClick = this.onBackdropClick.bind(this);
    }

    onBackdropClick(e) {
        if (e.target.className === 'modal fade in') {
            this.props.onClose();
        }
    }

    render() {
        return (
            <div className="modal fade in" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,.25)' }} onClick={this.onBackdropClick}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
    
}

Modal.PropTypes = {
    onClose: React.PropTypes.func.isRequired,
    children: React.PropTypes.node,
};
