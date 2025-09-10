import React, { Component } from 'react';

import { connect } from 'react-redux';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faBars,
    faClockRotateLeft,
    faHouseMedical,
    faPlus,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { FormattedMessage } from 'react-intl';
import { languages } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions/appActions';

class Header extends Component {
    changeLanguage = (language) => {
        console.log('check language: ', this.props.language);
        this.props.changeLanguageAppRedux(language);
    };
    render() {
        let showLanguage = this.props.language;
        return (
            <div className="home-header-container">
                <div className="home-header__position">
                    <div className="home-header__content">
                        <div className="header-content__logo">
                            <FontAwesomeIcon icon={faBars} className="content-logo__icon" />
                            <div className="content-logo__img"></div>
                        </div>
                        <div className="header-content__menu">
                            <ul className="content-menu__list">
                                <li className="content-menu__item">
                                    <a href="#" className="content-menu__link">
                                        <FormattedMessage id="header.medicalspecialty" />
                                        <span>
                                            <FormattedMessage id="header.findadoctorbyspecialty" />
                                        </span>
                                    </a>
                                </li>
                                <li className="content-menu__item">
                                    <a href="#" className="content-menu__link">
                                        <FormattedMessage id="header.health-facility" />
                                        <span>
                                            <FormattedMessage id="header.select-room" />
                                        </span>
                                    </a>
                                </li>
                                <li className="content-menu__item">
                                    <a href="#" className="content-menu__link">
                                        <FormattedMessage id="header.doctor" />
                                        <span>
                                            <FormattedMessage id="header.select-doctor" />
                                        </span>
                                    </a>
                                </li>
                                <li className="content-menu__item">
                                    <a href="#" className="content-menu__link">
                                        <FormattedMessage id="header.fee" />
                                        <span>
                                            <FormattedMessage id="header.check-health" />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="header-support">
                            <a className="support-handShake support-block ">
                                <FontAwesomeIcon icon={faHandshake} className="support-icon" />
                                <span>
                                    <FormattedMessage id="header.contact" />
                                </span>
                            </a>
                            <a className="support-schedule  support-block">
                                <FontAwesomeIcon icon={faClockRotateLeft} className="support-icon" />
                                <span>
                                    <FormattedMessage id="header.schedule" />
                                </span>
                            </a>
                            <div className="change-language">
                                <span className="show-language">
                                    {showLanguage}
                                    <FontAwesomeIcon icon={faAngleDown} className="icon-agnle" />
                                </span>
                                <ul className="language-list">
                                    <li className="language-item" onClick={() => this.changeLanguage(languages.EN)}>
                                        en
                                    </li>
                                    <li className="language-item" onClick={() => this.changeLanguage(languages.VI)}>
                                        vi
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-header__searchBackground">
                    <div className="header-searchContent">
                        <div className="header-search__titleBlock">
                            <p className="search-titleBlock__heading">Nền tảng y tế - Chăm sóc sức khỏe toàn diện</p>
                        </div>
                        <div className="header-search__searchBlock">
                            <div className="search-searchBlock__explore">
                                <textarea placeholder="Tìm chuyên khoa" rows={2} className="search-searchBlock__area" />
                                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                            </div>
                            <div className="search-searchBlock__choose">
                                <a href="#" className="search-searchBlock__choose1 choose">
                                    <FontAwesomeIcon icon={faHouseMedical} className="icon-houseMedical" />
                                    <span>Chọn bệnh viện/phòng khám</span>
                                </a>
                                <a href="#" className="search-searchBlock__choose2 choose">
                                    <FontAwesomeIcon icon={faHouseMedical} className="icon-houseMedical" />
                                    <span>Khám chuyên khoa/Bác sĩ</span>
                                </a>
                            </div>
                        </div>
                        <div className="header-search__questionBlock">
                            <a className="questionBlock-item">
                                <span>Làm cách nào để kiểm tra lịch của tôi đã được hủy hay chưa</span>
                                <FontAwesomeIcon icon={faPlus} />
                            </a>
                            <a className="questionBlock-item">
                                <span>Tôi muốn xem lại lịch đã đặt thì xem ở đâu?</span>
                                <FontAwesomeIcon icon={faPlus} />
                            </a>
                            <a className="questionBlock-item">
                                <span>Cách đặt khám tại phòng khám Nội Tiêu Hóa, Bệnh viện Chợ Rẫy</span>
                                <FontAwesomeIcon icon={faPlus} />
                            </a>
                            <a className="questionBlock-item">
                                <span>Cách đặt khám tại phòng khám Nội Tiêu Hóa, Bệnh viện Chợ Rẫy</span>
                                <FontAwesomeIcon icon={faPlus} />
                            </a>
                            <a className="questionBlock-item">
                                <span>Làm cách nào để kiểm tra lịch của tôi đã được hảy hay chưa</span>
                                <FontAwesomeIcon icon={faPlus} />
                            </a>
                            <a className="questionBlock-item">
                                <span>Làm cách nào để kiểm tra lịch của tôi đã được hảy hay chưa</span>
                                <FontAwesomeIcon icon={faPlus} />
                            </a>
                        </div>
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

//fire các event của th Redux, và biến các actions trong redux thành 1 props của th component(hiện tại là Header)
const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
    };
};

//connect là hàm của thư viện nhằm mục đích kết nối giữa th React và Redux lại với nhau
//để thằng React có thể sử dụng được những state của th Redux
export default connect(mapStateToProps, mapDispatchToProps)(Header);
