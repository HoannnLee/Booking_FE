import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from "react-intl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class MedicalFacility extends Component {

    render() {
        return (
            <div className='section'>
                <div className='section-titleBlock'>
                    <h2 className='section-title'>Cơ sở y tế</h2>
                    <button className='section-btn'>Xem thêm</button>
                </div>
                <div className='section-content'>
                    <Slider {...this.props.setting}>
                        <a href="#" className='section-item ' style={{ width: 372 }}>
                            <div className='section-imgBlock' >
                                <div className='section-img section-img--medicalFacility'></div>
                            </div>
                            <span className='section-heading'>Bệnh viện hữu nghị Việt Đức 1</span>
                        </a>

                        <a href="#" className='section-item ' style={{ width: 372 }}>
                            <div className='section-imgBlock' >
                                <div className='section-img section-img--medicalFacility'></div>
                            </div>
                            <span className='section-heading'>Bệnh viện hữu nghị Việt Đức 2</span>
                        </a>

                        <a href="#" className='section-item' style={{ width: 372 }}>
                            <div className='section-imgBlock' >
                                <div className='section-img section-img--medicalFacility'></div>
                            </div>
                            <span className='section-heading'>Bệnh viện hữu nghị Việt Đức 3</span>
                        </a>

                        <a href="#" className='section-item ' style={{ width: 372 }}>
                            <div className='section-imgBlock' >
                                <div className='section-img section-img--medicalFacility'></div>
                            </div>
                            <span className='section-heading'>Bệnh viện hữu nghị Việt Đức 4</span>
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

//fire các event của th Redux, và biến các actions trong redux thành 1 props của th component(hiện tại là MedicalFacility)
const mapDispatchToProps = (dispatch) => {
    return {

    };
};


//connect là hàm của thư viện nhằm mục đích kết nối giữa th React và Redux lại với nhau 
//để thằng React có thể sử dụng được những state của th Redux
export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
