import React, { Component } from 'react';
import Modal from 'react-modal';

class ModalRecipe extends Component {
    constructor(props, context){
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false
        }
    };

    handleShow() {
        this.setState({ show: true })
    };

    handleClose() {
        this.setState({ show: false })
    };

    render() {
        return(
            <Modal 
                    isOpen={modalIsOpen}
                    aria={{
                        labelledby: "heading",
                        describedby: "full_description"
                    }}
                >
                    <h1 id="heading">Alert</h1>
                    <div id="full_description">
                        <p>Description goes here.</p>
                    </div>
                    {/* <button onClick={this.handleCloseModal}>Close Modal</button> */}

            </Modal>
        );
    };
};

export default ModalRecipe;