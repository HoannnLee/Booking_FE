import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Outlet } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import './UserManage.scss';
import { getAllUsers } from '../../services/userService';
import ModalUser from './ModalUser';
class UserManage extends Component {
    /**
     * Life cycle(vòng đời của 1 class)
     * 1 -> Run constructor -> init state
     * 2 -> did mount -> set state
     * 3 -> run render function
     */
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModal: false,
        };
    }

    async componentDidMount() {
        const res = await getAllUsers('ALL');
        console.log('data: ', res.users);
        if (res && res.errCode === 0) {
            this.setState({
                arrUsers: res.users,
            });
        }
    }

    handleCreateNewUser = () => {
        this.setState({
            isOpenModal: true,
        });
    };

    toggleModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal,
        });
    };
    render() {
        let users = this.state.arrUsers;

        return (
            <div className="users-container mx-4">
                <ModalUser isOpen={this.state.isOpenModal} toogleModalPrarent={this.toggleModal} test={'adsac'} />
                <div className="mt-4 user-container__block-heading">
                    <div className=" ">
                        <h1 className="font-weight-bold users-container__heading">Manage users</h1>
                        <p className="users-container__des">Manage users account is here</p>
                    </div>
                    <div>
                        <button
                            onClick={() => this.handleCreateNewUser()}
                            className="btn btn-primary px-3 py-1 btn--addUser"
                            style={{ height: 40 }}
                        >
                            <FontAwesomeIcon icon={faPlus} className="mr-3" />
                            Add new user
                        </button>
                    </div>
                </div>
                <div className="users-table mt-4">
                    <table className="table table-hover">
                        <thead className="thead ">
                            <tr className="thead-row">
                                <th scope="col" className="text-center">
                                    ID
                                </th>
                                <th scope="col">Email</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Role ID</th>
                                <th scope="col">Position ID</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users &&
                                users.map((item, index) => {
                                    return (
                                        <tr>
                                            <td scope="row" className="text-center">
                                                {item.id}
                                            </td>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.roleId}</td>
                                            <td>{item.positionId}</td>
                                            <td>
                                                <a className="user-action  red" href="">
                                                    <FontAwesomeIcon icon={faTrash} className="user-action__icon " />
                                                </a>
                                                <a className="user-action blue" href="">
                                                    <FontAwesomeIcon icon={faUserPen} className="user-action__icon " />
                                                </a>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
