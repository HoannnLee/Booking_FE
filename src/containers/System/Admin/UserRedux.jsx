import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { languages } from "../../../utils"
import { fetchGenderStart } from '../../../store/actions';
import "./UserRedux.scss"


class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: []
        }
    }

    async componentDidMount() {
        this.props.getAllGenDer()
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
                genderArr: this.props.genderRedux
            })
        }
    }

    render() {
        const genders = this.state.genderArr;
        const language = this.props.language;
        return (
            <div className='user-reduxPage'>
                <div className="text-center title">Manage Users  with redux</div>

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
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputState"><FormattedMessage id="user-manage.role" /></label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="inputZip"><FormattedMessage id="user-manage.image" /></label>
                                    <input type="text" className="form-control" id="inputZip" />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>

                    </div>
                </div >
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        genderRedux: state.admin.gender
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllGenDer: () => dispatch(fetchGenderStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
