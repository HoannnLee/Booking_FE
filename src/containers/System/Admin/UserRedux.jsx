import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { languages } from "../../../utils"
import { fetchGenderStart, fetchPositionStart, fetchRoleStart } from '../../../store/actions';
import "./UserRedux.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faUpload } from '@fortawesome/free-solid-svg-icons';
import Lightbox from 'react-image-lightbox-2';
import 'react-image-lightbox-2/style.css'; //


class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            roleArr: [],
            positionArr: [],
            previewImg: "",
            isOpen: false
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
            this.setState({
                genderArr: this.props.genderRedux,

            })
        }
        else if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux
            })
        }
        else if (prevProps.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr: this.props.positionRedux
            })
        }
    }

    handleOnchangeImg = (e) => {
        const data = e.target.files;
        const file = data[0]
        console.log("check image:", file)
        if (file) {
            const objectURL = URL.createObjectURL(file);
            this.setState({
                previewImg: objectURL
            })


        }

    }

    openPreviewImg = () => {
        if (!this.state.previewImg) return;
        this.setState({
            isOpen: true
        })


    }

    render() {
        const genders = this.state.genderArr;
        const roles = this.state.roleArr;
        const positions = this.state.positionArr;
        const language = this.props.language;
        const isLoadingGender = this.props.isLoadingGender;
        console.log("check position userRedux: ", this.props.positionRedux)


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
                                <span className='loading-data__des'>Loading Gender...</span>
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
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4"><FormattedMessage id="user-manage.password" /></label>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4"><FormattedMessage id="user-manage.firstName" /></label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder="firstName" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4"><FormattedMessage id="user-manage.lastName" /></label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="lastName" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress"><FormattedMessage id="user-manage.address" /></label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className='form-row'>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputAddress2"><FormattedMessage id="user-manage.phoneNumber" /></label>
                                    <input type="text" className="form-control" id="inputAddress2" placeholder="+84339902379" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState"><FormattedMessage id="user-manage.gender" /></label>
                                    <select id="inputState" className="form-control">
                                        {genders && genders.length > 0 && genders.map((item, index) => {

                                            return (
                                                <option key={index} > {language === languages.VI ? item.valueVi : item.valueEn}</option>
                                            )
                                        })}


                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState"><FormattedMessage id="user-manage.position" /></label>
                                    <select id="inputState" className="form-control">
                                        {positions && positions.length > 0 && positions.map((item, index) => {

                                            return (
                                                <option key={index} > {language === languages.VI ? item.valueVi : item.valueEn}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputState"><FormattedMessage id="user-manage.role" /></label>
                                    <select id="inputState" className="form-control">
                                        {roles && roles.length > 0 && roles.map((item, index) => {

                                            return (
                                                <option key={index} > {language === languages.VI ? item.valueVi : item.valueEn}</option>
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

                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>

                    </div>
                </div >
                {this.state.isOpen === true &&
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllGenDer: () => dispatch(fetchGenderStart()),
        getAllRole: () => dispatch(fetchRoleStart()),
        getAllPosition: () => dispatch(fetchPositionStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
