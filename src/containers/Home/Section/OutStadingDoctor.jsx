import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from "react-intl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class OutStandingDoctor extends Component {

    render() {
        return (
            <div className='outstading-doctor--background'>
                <div className='section'>
                    <div className='section-titleBlock'>
                        <h2 className='section-title'>Bác sĩ nổi bật</h2>
                        <button className='section-btn'>Xem thêm</button>
                    </div>
                    <div className='section-content section-content--outstandingDoctor'>
                        <Slider {...this.props.setting}>
                            <a href="#" className='section-item section-item--outstandingDoctor ' style={{ width: 372 }}>
                                <div className='section-imgBlock section-imgBlock--outstadingDoctor' >
                                    <div className='section-img section-img---oustadingDoctor'></div>
                                </div>
                                <p className='section-heading section-heading--outstandingDoctor'>PGs.Ts. Hoan Lee PGs.Ts. Hoan Lee</p>
                                <span className='specialty-doctor'>Cơ xương khớp 1</span>
                            </a>

                            <a href="#" className='section-item section-item--outstandingDoctor ' style={{ width: 372 }}>
                                <div className='section-imgBlock section-imgBlock--outstadingDoctor' >
                                    <div className='section-img section-img---oustadingDoctor'></div>
                                </div>
                                <p className='section-heading section-heading--outstandingDoctor'>PGs.Ts. Hoan Lee PGs.Ts. Hoan Lee</p>
                                <span className='specialty-doctor'>Cơ xương khớp 2</span>
                            </a>

                            <a href="#" className='section-item section-item--outstandingDoctor' style={{ width: 372 }}>
                                <div className='section-imgBlock section-imgBlock--outstadingDoctor' >
                                    <div className='section-img section-img---oustadingDoctor'></div>
                                </div>
                                <p className='section-heading section-heading--outstandingDoctor'>PGs.Ts. Hoan Lee PGs.Ts. Hoan Lee </p>
                                <span className='specialty-doctor'>Cơ xương khớp 3</span>
                            </a>

                            <a href="#" className='section-item section-item--outstandingDoctor ' style={{ width: 372 }}>
                                <div className='section-imgBlock section-imgBlock--outstadingDoctor' >
                                    <div className='section-img section-img---oustadingDoctor'></div>
                                </div>
                                <p className='section-heading section-heading--outstandingDoctor'>PGs.Ts. Hoan Lee PGs.Ts. Hoan Lee PGs.Ts. Hoan Lee</p>
                                <p className='specialty-doctor'>Cơ xương khớp 4 , Cơ xương khớp 4,Cơ xương khớp 4,Cơ xương khớp 4,Cơ xương khớp 4</p>
                            </a>
                        </Slider>
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

//fire các event của th Redux, và biến các actions trong redux thành 1 props của th component(hiện tại là OutStandingDoctor)
const mapDispatchToProps = (dispatch) => {
    return {

    };
};


//connect là hàm của thư viện nhằm mục đích kết nối giữa th React và Redux lại với nhau 
//để thằng React có thể sử dụng được những state của th Redux
export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
