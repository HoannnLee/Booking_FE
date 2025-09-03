import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from "react-intl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class About extends Component {

    render() {
        return (
            <div className='outstading-doctor--background section-about--background'>
                <div className='section'>
                    <h3 className='section-heading section-about__heading'>Truyền thông nói gì về Hoan Lee Dev Front-End </h3>
                    <div className='section-about__content'>
                        <iframe width="560" height="315"
                            src="https://www.youtube.com/embed/cHHLHGNpCSA?si=6hxF9fbfSgDAdS1V" title="YouTube video player"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                            className='iframe'></iframe>
                        <div className='section-about__des'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, numquam aliquam cumque blanditiis nulla nobis, omnis optio doloremque soluta iure eos, facere repellendus labore ipsa debitis ullam sint expedita temporibus?
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

//fire các event của th Redux, và biến các actions trong redux thành 1 props của th component(hiện tại là About)
const mapDispatchToProps = (dispatch) => {
    return {

    };
};


//connect là hàm của thư viện nhằm mục đích kết nối giữa th React và Redux lại với nhau 
//để thằng React có thể sử dụng được những state của th Redux
export default connect(mapStateToProps, mapDispatchToProps)(About);
