import React, { Component } from 'react';

import { connect } from 'react-redux';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faClockRotateLeft, faHouseMedical, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { FormattedMessage } from "react-intl"

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
                                    <FormattedMessage id="header.medicalspecialty" />
                                    <span><FormattedMessage id="header.findadoctorbyspecialty" /></span>
                                </a>
                            </li>
                            <li className="content-menu__item">
                                <a href="#" className='content-menu__link'>
                                    <FormattedMessage id="header.health-facility" />
                                    <span><FormattedMessage id="header.select-room" /></span>
                                </a>
                            </li>
                            <li className="content-menu__item">
                                <a href="#" className='content-menu__link'>
                                    <FormattedMessage id="header.doctor" />
                                    <span><FormattedMessage id="header.select-doctor" /></span>
                                </a>
                            </li>
                            <li className="content-menu__item">
                                <a href="#" className='content-menu__link'>
                                    <FormattedMessage id="header.fee" />
                                    <span><FormattedMessage id="header.check-health" /></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="header-support">
                        <a className="support-handShake support-block ">
                            <FontAwesomeIcon icon={faHandshake} className="support-icon" />
                            <span><FormattedMessage id="header.contact" /></span>
                        </a>
                        <a className="support-schedule  support-block">
                            <FontAwesomeIcon icon={faClockRotateLeft} className="support-icon" />
                            <span><FormattedMessage id="header.schedule" /></span>
                        </a>
                        <div className='change-language'>
                            <span className='show-language'>vi
                                <FontAwesomeIcon icon={faAngleDown} className='icon-agnle' />

                            </span>
                            <ul className='language-list'>
                                <li className='language-item'>en</li>
                                <li className='language-item'>vi</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className='home-header__searchBackground'>
                    <div className='header-searchContent'>
                        <div className='header-search__titleBlock'>
                            <p className='search-titleBlock__heading'>Nền tảng y tế - Chăm sóc sức khỏe toàn diện</p>

                        </div>
                        <div className='header-search__searchBlock'>
                            <div className='search-searchBlock__explore'>
                                <textarea placeholder='Tìm chuyên khoa' rows={2} className='search-searchBlock__area' />
                                <FontAwesomeIcon icon={faSearch} className='search-icon' />

                            </div>
                            <div className='search-searchBlock__choose'>
                                <a href='#' className='search-searchBlock__choose1 choose'>
                                    <FontAwesomeIcon icon={faHouseMedical} className='icon-houseMedical' />
                                    <span>Chọn bệnh viện/phòng khám</span>
                                </a>
                                <a href='#' className='search-searchBlock__choose2 choose'>
                                    <FontAwesomeIcon icon={faHouseMedical} className='icon-houseMedical' />
                                    <span>Khám chuyên khoa/Bác sĩ</span>
                                </a>
                            </div>
                        </div>
                        <div className='header-search__questionBlock'>
                            <a className='questionBlock-item'>
                                <span>Làm cách nào để kiểm tra lịch của tôi đã được hủy hay chưa</span>
                                <FontAwesomeIcon icon={faPlus} />
                            </a>
                            <a className='questionBlock-item'>
                                <span>Tôi muốn xem lại lịch đã đặt thì xem ở đâu?</span>
                                <FontAwesomeIcon icon={faPlus} />
                            </a>
                            <a className='questionBlock-item'>
                                <span>Cách đặt khám tại phòng khám Nội Tiêu Hóa, Bệnh viện Chợ Rẫy</span>
                                <FontAwesomeIcon icon={faPlus} />
                            </a>
                            <a className='questionBlock-item'>
                                <span>Cách đặt khám tại phòng khám Nội Tiêu Hóa, Bệnh viện Chợ Rẫy</span>
                                <FontAwesomeIcon icon={faPlus} />
                            </a>
                            <a className='questionBlock-item'>
                                <span>Làm cách nào để kiểm tra lịch của tôi đã được hảy hay chưa</span>
                                <FontAwesomeIcon icon={faPlus} />
                            </a>
                            <a className='questionBlock-item'>
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
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
