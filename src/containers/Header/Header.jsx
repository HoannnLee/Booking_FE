import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import UserManage from '../System/UserManage';

import { languages } from '../../utils/constant';

class Header extends Component {
    handleChangeLanguage = (language) => {
        console.log('check language: ', this.props.language);
        this.props.changeLanguageAppRedux(language);
    };
    render() {
        const { processLogout, language, userInfo } = this.props;

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                {/* nút logout */}
                <div>
                    <div className='welcome-admin text-center'>
                        {/* phải check xem userInfo có các trường ở dưới không để tránh lỗi undefined khi có 1 trường bị null */}
                        Welcome, {userInfo && `${userInfo.firstName} ${userInfo.lastName}` ? `${userInfo.firstName} ${userInfo.lastName}` : ""} !
                    </div>
                    <div className="change-language">
                        <span
                            className={language === languages.VI ? 'language-vi active' : 'language-vi'}
                            onClick={() => this.handleChangeLanguage(languages.VI)}
                        >
                            VI
                        </span>
                        <span
                            className={language === languages.EN ? 'language-en active' : 'language-en'}
                            onClick={() => this.handleChangeLanguage(languages.EN)}
                        >
                            EN
                        </span>
                    </div>
                    <div className="btn btn-logout" onClick={processLogout} title="Logout">
                        <FontAwesomeIcon icon={faRightToBracket} />
                        <span> Đăng xuất </span>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
