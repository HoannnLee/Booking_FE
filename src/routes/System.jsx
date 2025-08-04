import React, { Component } from 'react';
import { connect } from 'react-redux';
import { path } from '../utils';

import Header from '../containers/Header/Header';
import { Outlet } from 'react-router';

class System extends Component {
    render() {
        // const { systemMenuPath } = this.props;
        return (
            <div className="system-container">
                <div className="system-list">
                    <>
                        <div className="system-container">
                            <Outlet />
                        </div>
                    </>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        systemMenuPath: state.app.systemMenuPath,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
