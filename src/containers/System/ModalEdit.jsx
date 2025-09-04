import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash';
class ModalEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
        };
    }

    componentDidMount() {
        const user = this.props.dataFromParent;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'hello',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
                phoneNumber: user.phoneNumber,
            });
        }
    }

    handleOnchangeInput = (e, id) => {
        // good code
        let copyState = { ...this.state };
        copyState[id] = e.target.value;

        this.setState({
            ...copyState,
        });
    };
    toggle = () => {
        this.props.toogleModalPrarent();
    };

    checkValidateInput = () => {
        let isValid = true;
        const arrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phoneNumber'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    };
    handleSaveChanges = () => {
        const isValidate = this.checkValidateInput();
        console.log('check props from child', this.props);
        if (isValidate) {
            this.props.handleEditUser(this.state);
        }
    };

    render() {
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
                        Edit User
                        <Button onClick={() => this.toggle()}>
                            <FontAwesomeIcon icon={faXmark} className="btn-close" />
                        </Button>
                    </ModalHeader>
                    <ModalBody>
                        <div className="modal-custom__body">
                            <div className="direct-row mb-4">
                                <div className="direct-col col-6">
                                    <label className="label-modal">Email</label>
                                    <input
                                        type="text"
                                        className="input-modal"
                                        onChange={(e) => this.handleOnchangeInput(e, 'email')}
                                        value={this.state.email}
                                        disabled
                                    />
                                </div>
                                <div className="direct-col col-6">
                                    <label className="label-modal">Password</label>
                                    <input
                                        type="password"
                                        className="input-modal"
                                        onChange={(e) => this.handleOnchangeInput(e, 'password')}
                                        value={this.state.password}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="direct-row mb-4">
                                <div className="direct-col col-6">
                                    <label className="label-modal">First Name</label>
                                    <input
                                        type="text"
                                        className="input-modal"
                                        onChange={(e) => this.handleOnchangeInput(e, 'firstName')}
                                        value={this.state.firstName}
                                    />
                                </div>
                                <div className="direct-col col-6 ">
                                    <label className="label-modal">Last Name</label>
                                    <input
                                        type="text"
                                        className="input-modal"
                                        onChange={(e) => this.handleOnchangeInput(e, 'lastName')}
                                        value={this.state.lastName}
                                    />
                                </div>
                            </div>
                            <div className="direct-col col-12 mb-4">
                                <label className="label-modal">Address</label>
                                <input
                                    type="text"
                                    className="input-modal"
                                    onChange={(e) => this.handleOnchangeInput(e, 'address')}
                                    value={this.state.address}
                                />
                            </div>
                            <div className="direct-row mb-4">
                                <div className="direct-col col-4">
                                    <label className="label-modal">Gender</label>
                                    <input type="text" className="input-modal" />
                                </div>
                                <div className="direct-col col-4 ">
                                    <label className="label-modal">Role ID</label>
                                    {/* <input type="text" className="input-modal" /> */}
                                    {/* <select id="gender" name="gender" className="input-modal">
                                        <option selected className="input-modal">
                                            Choose...
                                        </option>
                                        <option value="1" className="input-modal">
                                            Male
                                        </option>
                                        <option value="0" className="input-modal">
                                            Female
                                        </option>
                                    </select> */}
                                </div>
                                <div className="direct-col col-4 ">
                                    <label className="label-modal">Phone</label>
                                    <input
                                        type="text"
                                        className="input-modal"
                                        onChange={(e) => this.handleOnchangeInput(e, 'phoneNumber')}
                                        value={this.state.phoneNumber}
                                    />
                                </div>
                            </div>
                        </div>
                    </ModalBody>

                    <ModalFooter className="modal-custom__footer">
                        <Button onClick={() => this.handleSaveChanges()} className="  modal-custom__btnSubmit">
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);
