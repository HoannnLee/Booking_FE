import React, { Component } from 'react';

import { connect } from 'react-redux';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';

class Header extends Component {
    render() {
        return (
            <div className="home-header-container">
                <div className="home-header__content">
                    <div className="header-content__logo">
                        <FontAwesomeIcon icon={faBars} className="content-logo__icon" />
                        <div className="content-logo__img"></div>
                    </div>
                    <div className="header-content__menu">
                        <ul className="content-menu__list">
                            <li className="content-menu__item">
                                <a href="#" className='content-menu__link'>
                                    Chuyên khoa
                                    <span>Tìm bác sĩ theo chuyên khoa</span>
                                </a>
                            </li>
                            <li className="content-menu__item">
                                <a href="#" className='content-menu__link'>
                                    Cơ sở ý tế
                                    <span>Chọn bệnh viện phòng khám</span>
                                </a>
                            </li>
                            <li className="content-menu__item">
                                <a href="#" className='content-menu__link'>
                                    Bác sĩ
                                    <span>Chọn bác sĩ giỏi</span>
                                </a>
                            </li>
                            <li className="content-menu__item">
                                <a href="#" className='content-menu__link'>
                                    Gói khám
                                    <span>Khám sức khỏe tổng quát</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="header-content__help">
                        <a className="help-handShake help-block ">
                            <FontAwesomeIcon icon={faHandshake} className="help-icon" />
                            <span>Hợp tác</span>
                        </a>
                        <a className="help-schedule  help-block">
                            <FontAwesomeIcon icon={faClockRotateLeft} className="help-icon" />
                            <span>Lịch hẹn</span>
                        </a>
                        <a className="help-handShake help-block change-language">
                            vn
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
