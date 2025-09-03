import React, { Component } from 'react';

import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from "react-intl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon from '../../../assets/service/iconkham-chuyen-khoa.png'

class Service extends Component {

    render() {
        console.log("check setting", this.props.setting)
        return (
            <div className='section section-service'>
                <div className='section-titleBlock'>
                    <h2 className='section-title'>Dịch vụ toàn diện</h2>
                </div>
                <div className='section-content'>
                    <div className='service-content__list' >
                        <a href='#' className='service-content__item'>
                            <div className='background-item'></div>
                            <img src={icon} alt='ảnh chuyên khoan' className='service-content__icon' />
                            <span className='service-content__title'> Khám Chuyên Khoa</span>
                        </a>
                        <a href='#' className='service-content__item'>
                            <div></div>
                            <span className='service-content__title'> Khám Chuyên Khoa</span>
                        </a>
                        <a href='#' className='service-content__item'>
                            <div></div>
                            <span className='service-content__title'> Khám Chuyên Khoa</span>
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
        language: state.app.language,
    };
};

//fire các event của th Redux, và biến các actions trong redux thành 1 props của th component(hiện tại là Service)
const mapDispatchToProps = (dispatch) => {
    return {

    };
};


//connect là hàm của thư viện nhằm mục đích kết nối giữa th React và Redux lại với nhau 
//để thằng React có thể sử dụng được những state của th Redux
export default connect(mapStateToProps, mapDispatchToProps)(Service);
