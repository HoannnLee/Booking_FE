import React, { Component } from 'react';

import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";
import doctorImg from "../../../assets/forYou/bac-si.png"
import './forYou.scss';


class forYou extends Component {

    render() {

        return (
            <div className='section-forYou'>
                <div className='forYou-Title'>
                    <h3>Dành cho bạn</h3>
                </div>
                <div className='forYou-Content'>
                    <a className='forYou-item'>
                        <img src={doctorImg} alt='Bác sĩ' className='forYou-Img' />
                        <div className='forYou-heading'>Bác sĩ</div>
                    </a>
                    <a className='forYou-item'>
                        <img src={doctorImg} alt='Bác sĩ' className='forYou-Img' />
                        <div className='forYou-heading'>Bác sĩ</div>
                    </a>
                    <a className='forYou-item'>
                        <img src={doctorImg} alt='Bác sĩ' className='forYou-Img' />
                        <div className='forYou-heading'>Bác sĩ</div>
                    </a>
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

//fire các event của th Redux, và biến các actions trong redux thành 1 props của th component(hiện tại là forYou)
const mapDispatchToProps = (dispatch) => {
    return {

    };
};


//connect là hàm của thư viện nhằm mục đích kết nối giữa th React và Redux lại với nhau 
//để thằng React có thể sử dụng được những state của th Redux
export default connect(mapStateToProps, mapDispatchToProps)(forYou);
