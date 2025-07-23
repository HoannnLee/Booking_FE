import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

import * as actions from '../../store/actions';
import { KeyCodeUtils, LanguageUtils } from '../../utils';

import image from '../../assets/images/';
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            isShowHidePassword: false,
        };
    }

    handleOnchangeUserName = (e) => {
        this.setState({
            userName: e.target.value,
        });
    };

    handleOnchangePassword = (e) => {
        this.setState({
            password: e.target.value,
        });
    };

    handleShowHidePassword = () => {
        this.setState({
            isShowHidePassword: !this.state.isShowHidePassword,
        });
    };
    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="login-content__header col-12">
                            <img src={image.logo} alt="Logo" className="mt-3 content-header__logo" />
                            <h2 className="text-center mt-4 content-header__heading"> Welcome back! </h2>
                        </div>
                        <div className="col-12 login-social__icon">
                            <a href="" className="login-social__item">
                                <FontAwesomeIcon icon={faGoogle} className="btn icon-brands fill--black" />
                                <span className="">Login with Google</span>
                            </a>
                            <a href="" className="login-social__item">
                                <FontAwesomeIcon icon={faFacebook} className="btn icon-brands fill--blue" />
                                <span className="">Login with Facebook</span>
                            </a>
                        </div>

                        <span className="login-chooseDifferent">or</span>

                        <div className="login-content__form col-12">
                            <div className="form-group mb-2">
                                <label className="login-label"> Username</label>
                                <input
                                    type="text"
                                    className="form-control login-input"
                                    placeholder="Enter your username"
                                    value={this.state.userName}
                                    onChange={(e) => this.handleOnchangeUserName(e)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="login-label"> Password</label>
                                <div className="custom-input-password">
                                    <input
                                        type={this.state.isShowHidePassword ? 'text' : 'password'}
                                        className="form-control login-input"
                                        placeholder="Enter your password"
                                        value={this.state.password}
                                        onChange={(e) => this.handleOnchangePassword(e)}
                                    />
                                    <span onClick={() => this.handleShowHidePassword()}>
                                        <FontAwesomeIcon
                                            icon={this.state.isShowHidePassword ? faEye : faEyeSlash}
                                            className="icon-eye"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-info text-white mt-5 btn-login">Login</button>
                            </div>
                            <div className="col-12 mt-4">
                                <span className="login-noAccount__des">
                                    Don't have an account?
                                    <a href="#" className="alert-dark login-redicrect__singup">
                                        Sign up
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
