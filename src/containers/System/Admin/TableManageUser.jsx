import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import '../UserManage.scss';
import "./TableManageUser.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { deleteUserStart, fetchAllUserStart } from '../../../store/actions';
import * as ReactDOM from 'react-dom'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css'


const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text)
}
class TableManageUser extends Component {
    /**
     * Life cycle(vòng đời của 1 class)
     * 1 -> Run constructor -> init state
     * 2 -> did mount -> set state
     * 3 -> run render function
     */
    constructor(props) {
        super(props);
        this.state = {
            usersRedux: []
        }

    }

    componentDidMount() {
        this.props.getAllUserRedux()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.listUser !== this.props.listUser) {
            this.setState({
                usersRedux: this.props.listUser
            })
        }
    }
    handleDeleteUser = (item) => {
        this.props.deleteUserRedux(item.id)
    }
    handleEditUser = (data) => {
        this.props.dataFromParent(data)
    }
    render() {
        const users = this.state.usersRedux;


        return (
            <React.Fragment>
                <div className="users-container pd-4">
                    <div className="users-table mt-5">
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

                                {users && users.length > 0 &&

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
                                                            onClick={() => this.handleDeleteUser(item)}
                                                            icon={faTrash}
                                                            className="user-action__icon "

                                                        />
                                                    </a>
                                                    <a className="user-action blue">
                                                        <FontAwesomeIcon
                                                            onClick={() => this.handleEditUser(item)}
                                                            icon={faUserPen}
                                                            className="user-action__icon "

                                                        />
                                                    </a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>

                <MdEditor
                    style={{ height: 450, borderRadius: 10 }}

                    renderHTML={(text) => mdParser.render(text)}
                    onChange={handleEditorChange}
                />

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listUser: state.admin.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUserRedux: () => dispatch(fetchAllUserStart()),
        deleteUserRedux: (user) => dispatch(deleteUserStart(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
