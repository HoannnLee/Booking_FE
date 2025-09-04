import React, { Component } from 'react';
import { connect } from 'react-redux';
import { path } from '../utils';

import Header from '../containers/Header/Header';
import { Outlet } from 'react-router';
import './System.scss';
class System extends Component {
    render() {
        const { isLoggedIn } = this.props;
        return (
            <div className="admin-dashboard">
                <div className="admin-dashboard__menu">{isLoggedIn && <Header />}</div>
                <div className="admin-dashboard__data">
                    <div className="system-list">
                        <div className="system-container">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
