import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { languages, CRUD_Actions, CommonUtils } from "../../../utils"
import { createNewUser, editUserStart, fetchGenderStart, fetchPositionStart, fetchRoleStart } from '../../../store/actions';
import "./UserRedux.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faUpload } from '@fortawesome/free-solid-svg-icons';
import Lightbox from 'react-image-lightbox-2';
import 'react-image-lightbox-2/style.css'; //
import TableManageUser from './TableManageUser';
import { Buffer } from 'buffer';


class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            roleArr: [],
            positionArr: [],
            previewImg: "",
            isOpen: false,


            email: "",
            password: "",
            firstName: " ",
            lastName: "",
            address: "",
            phoneNumber: "",
            gender: " ",
            position: "",
            role: "",
            avatar: "",
            editUserId: "",

            action: ""
        }
    }

    async componentDidMount() {
        this.props.getAllGenDer()
        this.props.getAllRole()
        this.props.getAllPosition()
        // try {
        //     const res = await getAllCodeService('gender');
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }
        // } catch (error) {

        // }
    }

    // hàm này sẽ bắt th component này render lại khi state thay đổi
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            const arrGender = this.props.genderRedux;
            this.setState({
                genderArr: arrGender,
                gender: arrGender && arrGender.length > 0 ? arrGender[0].key : "",

            })
        }
        else if (prevProps.roleRedux !== this.props.roleRedux) {
            const arrRole = this.props.roleRedux;
            this.setState({
                roleArr: arrRole,
                role: arrRole && arrRole.length > 0 ? arrRole[0].key : "",
            })
        }
        else if (prevProps.positionRedux !== this.props.positionRedux) {
            const arrPosition = this.props.positionRedux;
            this.setState({
                positionArr: arrPosition,
                position: arrPosition && arrPosition.length > 0 ? arrPosition[0].key : "",
            })
        }
        else if (prevProps.listUser !== this.props.listUser) {
            const arrRole = this.props.roleRedux;
            const arrPosition = this.props.positionRedux;
            const arrGender = this.props.genderRedux;
            this.setState({
                email: "",
                password: "",
                firstName: " ",
                lastName: "",
                address: "",
                phoneNumber: "",
                gender: arrGender && arrGender.length > 0 ? arrGender[0].key : "",
                position: arrPosition && arrPosition.length > 0 ? arrPosition[0].key : "",
                role: arrRole && arrRole.length > 0 ? arrRole[0].key : "",
                avatar: "",
                action: CRUD_Actions.CREATE,
                previewImg: ""
            })
        }
    };

    handleOnchangeImg = async (e) => {
        const data = e.target.files;
        const file = data[0]
        let base64 = await CommonUtils.getBase64(file)
        console.log("check image:", base64)
        if (file) {
            const objectURL = URL.createObjectURL(file);
            this.setState({
                previewImg: objectURL,
                avatar: base64
            })
        }
    };

    openPreviewImg = () => {
        if (!this.state.previewImg) return;
        this.setState({
            isOpen: true
        })
    };


    checkValidate = () => {
        let isValidate = true;
        const arrCheck = ["email", "password", "firstName", "lastName",
            "address", "phoneNumber"]
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValidate = false;
                alert("Missing input parameter: " + arrCheck[i])
                break;
            }
        }
        return isValidate;
    };

    handleCreateUser = () => {
        const isValidate = this.checkValidate()
        let { action } = this.state;

        if (action === CRUD_Actions.CREATE) {

            if (isValidate === false) return;
            this.props.createUser({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
                avatar: this.state.avatar,
                previewImg: ""
            })
        } else if (action === CRUD_Actions.EDIT) {
            this.props.updateUserRedux({
                id: this.state.editUserId,
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
                avatar: this.state.avatar
            })
        }



    };

    handleOnchangeInput = (event, id) => {
        const copyState = { ...this.state };

        copyState[id] = event.target.value;

        this.setState({
            ...copyState
        })

    };

    handleDatafromParent = (user) => {
        let imageBase64 = " ";
        if (user.image) {
            imageBase64 = new Buffer(user.image, "base64").toString("binary");
        }
        this.setState({
            email: user.email,
            password: "fillllllllllll",
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            phoneNumber: user.phoneNumber,
            gender: user.gender,
            position: user.positionId,
            role: user.roleId,
            avatar: imageBase64,
            previewImg: imageBase64,
            action: CRUD_Actions.EDIT,
            editUserId: user.id
        })
    };

    render() {
        const genders = this.state.genderArr;
        const roles = this.state.roleArr;
        const positions = this.state.positionArr;
        const language = this.props.language;
        const isLoadingGender = this.props.isLoadingGender;

        const { email, password, firstName, lastName,
            address, phoneNumber, gender, position, role, avatar
        } = this.state;

       
        return (
            <div className='user-reduxPage'>
                <div className="text-center title">Manage Users  with redux</div>
                <div>
                    {isLoadingGender ?

                        <div className='loading-data'>
                            <div className='loading-data__background'>
                                <div className='loading-data__icon'>
                                    <FontAwesomeIcon icon={faSpinner} className='loading-icon' />
                                </div>
                                <span className='loading-data__des'>Loading data success...</span>
                            </div>
                        </div>
                        : ""
                    }
                </div>
                <div className='mt-4 user-redux-container'>
                    <div className='container user-redux-form'>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4"><FormattedMessage id="user-manage.email" /></label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail4"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(event) => this.handleOnchangeInput(event, "email")}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4"><FormattedMessage id="user-manage.password" /></label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="inputPassword4"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(event) => this.handleOnchangeInput(event, "password")}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4"><FormattedMessage id="user-manage.firstName" /></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputEmail4"
                                        placeholder="firstName"
                                        value={firstName}
                                        onChange={(event) => this.handleOnchangeInput(event, "firstName")}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4"><FormattedMessage id="user-manage.lastName" /></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputPassword4"
                                        placeholder="lastName"
                                        value={lastName}
                                        onChange={(event) => this.handleOnchangeInput(event, "lastName")}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress"><FormattedMessage id="user-manage.address" /></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputAddress"
                                    placeholder="1234 Main St"
                                    value={address}
                                    onChange={(event) => this.handleOnchangeInput(event, "address")}
                                />
                            </div>
                            <div className='form-row'>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputAddress2"><FormattedMessage id="user-manage.phoneNumber" /></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputAddress2"
                                        placeholder="+84339902379"
                                        value={phoneNumber}
                                        onChange={(event) => this.handleOnchangeInput(event, "phoneNumber")}
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState"><FormattedMessage id="user-manage.gender" /></label>
                                    <select
                                        id="inputState"
                                        className="form-control"
                                        value={gender}
                                        onChange={(event) => this.handleOnchangeInput(event, "gender")}
                                    >
                                        {genders && genders.length > 0 && genders.map((item, index) => {

                                            return (
                                                <option key={index} value={item.key} > {language === languages.VI ? item.valueVi : item.valueEn}</option>
                                            )
                                        })}


                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState"><FormattedMessage id="user-manage.position" /></label>
                                    <select
                                        id="inputState"
                                        className="form-control"
                                        value={position}
                                        onChange={(event) => this.handleOnchangeInput(event, "position")}

                                    >
                                        {positions && positions.length > 0 && positions.map((item, index) => {

                                            return (
                                                <option key={index} value={item.key} > {language === languages.VI ? item.valueVi : item.valueEn}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputState"><FormattedMessage id="user-manage.role" /></label>
                                    <select
                                        id="inputState"
                                        className="form-control"
                                        value={role}
                                        onChange={(event) => this.handleOnchangeInput(event, "role")}
                                    >
                                        {roles && roles.length > 0 && roles.map((item, index) => {

                                            return (
                                                <option key={index} value={item.key} > {language === languages.VI ? item.valueVi : item.valueEn}</option>
                                            )
                                        })}
                                    </select>
                                </div>

                                <div className="form-group col-md-6">
                                    <label ><FormattedMessage id="user-manage.image" /></label>
                                    <div className='previewImg-container' >
                                        <input
                                            type="file"
                                            className="" id="previewImg"
                                            hidden
                                            onChange={(e) => this.handleOnchangeImg(e)}
                                        />
                                        <label htmlFor='previewImg' className='previewImg-label'> <FontAwesomeIcon icon={faUpload} className='previewImg--icon' />Tải ảnh</label>
                                        <div
                                            className='previewImg-url'
                                            style={{ backgroundImage: `url(${this.state.previewImg})` }}
                                            onClick={() => this.openPreviewImg()}
                                        >

                                        </div>
                                    </div>

                                </div>
                            </div>

                            <button
                                type="submit"
                                className={this.state.action === CRUD_Actions.EDIT ? "btn btn-warning" : "btn btn-primary"}
                                onClick={() => this.handleCreateUser()}
                            >
                                {this.state.action === CRUD_Actions.EDIT ?
                                    <FormattedMessage id='user-manage.savechange' />
                                    :
                                    <FormattedMessage id='user-manage.createUser' />
                                }</button>
                        </form>

                    </div>
                </div >
                <TableManageUser
                    dataFromParent={this.handleDatafromParent}
                    action={this.state.action}
                />
                {
                    this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImg}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        appElement={document.getElementById("root")}
                    />
                }
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        genderRedux: state.admin.gender,
        roleRedux: state.admin.role,
        positionRedux: state.admin.position,
        isLoadingGender: state.admin.isLoadingGender,
        listUser: state.admin.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllGenDer: () => dispatch(fetchGenderStart()),
        getAllRole: () => dispatch(fetchRoleStart()),
        getAllPosition: () => dispatch(fetchPositionStart()),
        createUser: (data) => dispatch(createNewUser(data)),
        updateUserRedux: (data) => dispatch(editUserStart(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
