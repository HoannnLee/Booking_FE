import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import ProductManage from '../containers/System/ProductManage';
import RegisterPackageGroupOrAcc from '../containers/System/RegisterPackageGroupOrAcc';


class System extends Component {
    render() {
        const { systemMenuPath } = this.props;
        return (
            <div className="system-container">
                <div className="system-list">
                    <Routes>
                        <Route path="/system/user-manage" element={<UserManage />} />
                        <Route path="/system/product-manage" element={<ProductManage />} />
                        <Route
                            path="/system/register-package-group-or-account"
                            element={<RegisterPackageGroupOrAcc />}
                        />
                        <Route
                            component={() => {
                                return <Redirect to={systemMenuPath} />;
                            }}
                        />
                    </Routes>
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
