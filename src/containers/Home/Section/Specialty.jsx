import React, { Component } from 'react';

import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from "react-intl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Specialty.scss';
import Slider from "react-slick";
import specialtyImg from "../../../assets/specialty/co-xuong-khop.png"

class Specialty extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true

        };
        return (
            <div className='section-specialty'>
                <div className='specialty-titleBlock'>
                    <h2 className='specialty-title'>Chuyên Khoa</h2>
                    <button className='specialty-more'>Xem thêm</button>
                </div>
                <div className='specialty-content'>
                    <Slider {...settings}>
                        <a href="#" className='specialty-item ' style={{ width: 372 }}>
                            <div className='specialty-imgBlock' >
                                <div className='specialty-img'></div>
                            </div>
                            <span className='specialty-heading'>Cơ Xương Khớp</span>
                        </a>

                        <a href="#" className='specialty-item ' style={{ width: 372 }}>
                            <div className='specialty-imgBlock' >
                                <div className='specialty-img'></div>
                            </div>
                            <span className='specialty-heading'>Cơ Xương Khớp</span>
                        </a>

                        <a href="#" className='specialty-item' style={{ width: 372 }}>
                            <div className='specialty-imgBlock' >
                                <div className='specialty-img'></div>
                            </div>
                            <span className='specialty-heading'>Cơ Xương Khớp</span>
                        </a>

                        <a href="#" className='specialty-item ' style={{ width: 372 }}>
                            <div className='specialty-imgBlock' >
                                <div className='specialty-img'></div>
                            </div>
                            <span className='specialty-heading'>Cơ Xương Khớp</span>
                        </a>
                    </Slider>
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

//fire các event của th Redux, và biến các actions trong redux thành 1 props của th component(hiện tại là Specialty)
const mapDispatchToProps = (dispatch) => {
    return {

    };
};


//connect là hàm của thư viện nhằm mục đích kết nối giữa th React và Redux lại với nhau 
//để thằng React có thể sử dụng được những state của th Redux
export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
