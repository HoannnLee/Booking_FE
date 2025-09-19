import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from "react-intl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { fetchTopDoctorStart } from '../../../store/actions';

import { languages } from "../../../utils/constant"
import { Buffer } from 'buffer';

class OutStandingDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrDoctors: []
        }
    }



    componentDidMount() {
        this.props.loadingTopDoctor()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorRedux !== this.props.topDoctorRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorRedux
            })
            console.log("didupdate is running...")
        }
    }
    render() {
        const arrDoctors = this.state.arrDoctors;
        let language = this.props.language;
        console.log("check top doctor from page: ", this.state.arrDoctors)
        return (
            <div className='outstading-doctor--background'>
                <div className='section'>
                    <div className='section-titleBlock'>
                        <h2 className='section-title'>Bác sĩ nổi bật</h2>
                        <button className='section-btn'>Xem thêm</button>
                    </div>
                    <div className='section-content section-content--outstandingDoctor'>
                        <Slider {...this.props.setting}>
                            {arrDoctors && arrDoctors.length > 0 &&
                                arrDoctors.map((item, index) => {
                                    let nameVi = `${item.positionData.valueVi} , ${item.lastName} ${item.firstName}`
                                    let nameEn = `${item.positionData.valueEn} , ${item.lastName} ${item.firstName}`
                                    let imageBase64 = ""
                                    if (item.image) {
                                        imageBase64 = new Buffer(item.image, "base64").toString("binary");
                                    }
                                    console.log("check name Vi: ", nameVi, "check name En ", nameEn)

                                    return (
                                        <a key={index} href="#" className='section-item section-item--outstandingDoctor ' style={{ width: 372 }}>
                                            <div className='section-imgBlock section-imgBlock--outstadingDoctor' >
                                                <div className='section-img section-img---oustadingDoctor'
                                                    style={{ backgroundImage: `url(${imageBase64})` }}></div>
                                            </div>
                                            <p className='section-heading section-heading--outstandingDoctor'>{language === languages.VI ? nameVi : nameEn}</p>
                                            <span className='specialty-doctor'>Cơ xương khớp 1</span>
                                        </a>

                                    )
                                })

                            }


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
        topDoctorRedux: state.admin.topDoctors,
    };
};

//fire các event của th Redux, và biến các actions trong redux thành 1 props của th component(hiện tại là OutStandingDoctor)
const mapDispatchToProps = (dispatch) => {
    return {
        loadingTopDoctor: () => dispatch(fetchTopDoctorStart())
    };
};


//connect là hàm của thư viện nhằm mục đích kết nối giữa th React và Redux lại với nhau 
//để thằng React có thể sử dụng được những state của th Redux
export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
