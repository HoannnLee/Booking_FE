import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from "react-intl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class MentalHealth extends Component {

    render() {
        return (
            <div className='mentalHealth-background'>
                <div className='section'>
                    <div className='section-titleBlock'>
                        <h2 className='section-title'>Sức khỏe tinh thần</h2>
                    </div>
                    <div className='section-content s'>
                        <Slider {...this.props.setting}>
                            <a href="#" className='section-item section-item--mentalHealth  ' style={{ width: 372 }}>
                                <div className='section-imgBlock ' >
                                    <div className='section-img section-img--mentalHealth '></div>
                                </div>

                                <span className='section-heading section-heading--mentalHealth'>Sức khỏe tâm thần 1</span>
                            </a>

                            <a href="#" className='section-item section-item--mentalHealth  ' style={{ width: 372 }}>
                                <div className='section-imgBlock ' >
                                    <div className='section-img section-img--mentalHealth '></div>
                                </div>

                                <span className='section-heading section-heading--mentalHealth'>Sức khỏe tâm thần 2</span>
                            </a>

                            <a href="#" className='section-item section-item--mentalHealth ' style={{ width: 372 }}>
                                <div className='section-imgBlock ' >
                                    <div className='section-img section-img--mentalHealth '></div>
                                </div>

                                <span className='section-heading section-heading--mentalHealth'>Sức khỏe tâm thần 3</span>
                            </a>

                            <a href="#" className='section-item section-item--mentalHealth  ' style={{ width: 372 }}>
                                <div className='section-imgBlock ' >
                                    <div className='section-img section-img--mentalHealth '></div>
                                </div>

                                <span className='section-heading section-heading--mentalHealth'>Sức khỏe tâm thần 4</span>
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

//fire các event của th Redux, và biến các actions trong redux thành 1 props của th component(hiện tại là MentalHealth)
const mapDispatchToProps = (dispatch) => {
    return {

    };
};


//connect là hàm của thư viện nhằm mục đích kết nối giữa th React và Redux lại với nhau 
//để thằng React có thể sử dụng được những state của th Redux
export default connect(mapStateToProps, mapDispatchToProps)(MentalHealth);
