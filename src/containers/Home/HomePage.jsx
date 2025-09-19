import React, { Component } from 'react';

import { connect } from 'react-redux';
import Header from './Header';
import Specialty from './Section/Specialty';
import ForYou from './Section/forYou';
import Service from './Section/Service';
import MedicalFacility from './Section/MedicalFacility';
import "./HomePage.scss"
import OutStadingDoctor from './Section/OutStadingDoctor';
import MentalHealth from './Section/MentalHealth';
import About from './Section/About';
import Footer from './Section/Footer';
import HandBook from './Section/HandBook';

class HomePage extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToScroll: 1,
            variableWidth: true

        };
        const settingSlide3 = {
            ...settings,
            slidesToShow: 3,
        }

        const settingSlide4 = {
            ...settings,
            slidesToShow: 4,
        }
        return (
            <>
                <Header />
                <ForYou />
                <Service />
                <Specialty
                    setting={settingSlide3}
                />
                <MedicalFacility
                    setting={settingSlide3}
                />
                <OutStadingDoctor
                    setting={settingSlide3}
                />
                <ForYou />
                <MentalHealth
                    setting={settingSlide3}
                />
                <HandBook setting={settingSlide4} />
                <About />
                <HandBook setting={settingSlide4} />
                <Footer />

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
