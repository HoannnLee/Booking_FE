import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    toggle = () => {
        this.props.toogleModalPrarent();
    };
    render() {
        console.log('check state modal:', this.props.isOpenModal);
        console.log('check props modal:', this.props);
        return (
            <>
                <Modal
                    isOpen={this.props.isOpen}
                    fade={true}
                    toggle={() => this.toggle()}
                    centered={true}
                    className="modal-custom"
                >
                    <ModalHeader className="modal-custon__header">
                        Create a new User
                        <Button onClick={() => this.toggle()}>
                            <FontAwesomeIcon icon={faXmark} className="btn-close" />
                        </Button>
                    </ModalHeader>
                    <ModalBody>
                        <div className="modal-custom__body">
                            <div className="direct-row mb-4">
                                <div className="direct-col col-6">
                                    <label className="label-modal">Email</label>
                                    <input type="text" className="input-modal" />
                                </div>
                                <div className="direct-col col-6">
                                    <label className="label-modal">Password</label>
                                    <input type="password" className="input-modal" />
                                </div>
                            </div>
                            <div className="direct-row mb-4">
                                <div className="direct-col col-6">
                                    <label className="label-modal">First Name</label>
                                    <input type="text" className="input-modal" />
                                </div>
                                <div className="direct-col col-6 ">
                                    <label className="label-modal">Last Name</label>
                                    <input type="text" className="input-modal" />
                                </div>
                            </div>
                            <div className="direct-col col-12 mb-4">
                                <label className="label-modal">Address</label>
                                <input type="text" className="input-modal" />
                            </div>
                            <div className="direct-row mb-4">
                                <div className="direct-col col-4">
                                    <label className="label-modal">Gender</label>
                                    <input type="text" className="input-modal" />
                                </div>
                                <div className="direct-col col-4 ">
                                    <label className="label-modal">Role ID</label>
                                    <input type="text" className="input-modal" />
                                </div>
                                <div className="direct-col col-4 ">
                                    <label className="label-modal">Phone</label>
                                    <input type="text" className="input-modal" />
                                </div>
                            </div>
                        </div>
                    </ModalBody>

                    <ModalFooter className="modal-custom__footer">
                        <Button onClick={() => this.toggle()} className="  modal-custom__btnSubmit">
                            Save Changes
                        </Button>
                        <Button onClick={() => this.toggle()} className=" modal-custom__btnCancel">
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
