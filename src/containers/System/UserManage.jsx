import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Outlet } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import './UserManage.scss';
import { getAllUsers, createNewUserService, deleteUserService, editUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import ModalEdit from './ModalEdit';
import { Button } from 'reactstrap';
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
            openModalEdit: false,
            users: {},
        };
    }

    async componentDidMount() {
        await this.getALLUsers();
    }

    getALLUsers = async () => {
        const res = await getAllUsers('ALL');

        if (res && res.errCode === 0) {
            this.setState({
                arrUsers: res.users,
            });
        }
    };

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

    toggleModalEdit = () => {
        this.setState({
            openModalEdit: !this.state.openModalEdit,
        });
    };
    CreateNewUser = async (data) => {
        try {
            const res = await createNewUserService(data);
            console.log('check respone', res);
            if (res && res.errCode !== 0) {
                alert(res.message);
            } else {
                await this.getALLUsers();
                this.setState({
                    isOpenModal: false,
                });
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    handleDeleteUser = async (userId) => {
        console.log('User Id: ', userId);
        try {
            const res = await deleteUserService(userId);
            if (res && res.errCode !== 0) {
                console.log('message delete: ', res);
            } else {
                await this.getALLUsers();
            }
        } catch (error) {
            console.log(error);
        }
    };

    handleOpenModalEdit = (user) => {
        console.log('check modal edit: ', user);
        this.setState({
            openModalEdit: true,
            users: user,
        });
    };

    editUser = async (user) => {
        try {
            const res = await editUserService(user);

            if (res && res.errCode !== 0) {
                console.log('Have a problem', res.message);
            } else {
                await this.getALLUsers();
                this.setState({
                    openModalEdit: false,
                });
                console.log('Edit success');
            }
        } catch (error) {
            console.log(error);
        }
    };
    render() {
        let users = this.state.arrUsers;

        return (
            <div className="users-container pd-4">
                <ModalUser
                    isOpen={this.state.isOpenModal}
                    toogleModalPrarent={this.toggleModal}
                    handleCreateUser={this.CreateNewUser}
                />
                {this.state.openModalEdit && (
                    <ModalEdit
                        isOpen={this.state.openModalEdit}
                        toogleModalPrarent={this.toggleModalEdit}
                        dataFromParent={this.state.users}
                        handleEditUser={this.editUser}
                    />
                )}

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
                                        <tr key={index}>
                                            <td scope="row" className="text-center">
                                                {item.id}
                                            </td>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td className="p-35">{item.gender}</td>
                                            <td className="p-35">{item.roleId}</td>
                                            <td>{item.positionId}</td>
                                            <td>
                                                <a className="user-action  red">
                                                    <FontAwesomeIcon
                                                        icon={faTrash}
                                                        className="user-action__icon "
                                                        onClick={() => this.handleDeleteUser(item.id)}
                                                    />
                                                </a>
                                                <a className="user-action blue">
                                                    <FontAwesomeIcon
                                                        icon={faUserPen}
                                                        className="user-action__icon "
                                                        onClick={() => this.handleOpenModalEdit(item)}
                                                    />
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
