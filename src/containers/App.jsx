import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Routes, unstable_HistoryRouter as HistoryRouter, Navigate } from 'react-router-dom';
// import { history } from '../redux';
import { ToastContainer } from 'react-toastify';

import { path } from '../utils';

import Home from '../routes/Home';
// import Login from '../routes/Login';
import Login from './Auth/Login';
import Header from './Header/Header';
import System from '../routes/System';

import { CustomToastCloseButton } from '../components/CustomToast';
import ConfirmModal from '../components/ConfirmModal';
import PublicOnlyRoute from './Router/publicOnlyRoute';
import PrivateRoute from './Router/privateRoute';
import ProductManage from './System/ProductManage';
import UserManage from './System/UserManage';
import RegisterPackageGroupOrAcc from './System/RegisterPackageGroupOrAcc';

class App extends Component {
    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    render() {
        return (
            <Fragment>
                <div className="main-container">
                    <ConfirmModal />
                    {this.props.isLoggedIn && <Header />}

                    <span className="content-container">
                        <Routes>
                            <Route path={path.HOME} element={<Home />} />
                            <Route path={path.LOGIN} element={<PublicOnlyRoute element={Login} />} />

                            {/* Route hệ thống */}
                            <Route path={path.SYSTEM} element={<PrivateRoute element={System} />}>
                                <Route index element={<Navigate to="user-manage" replace />} />

                                {/* Các đường dẫn con */}
                                <Route path="user-manage" element={<UserManage />} />
                                <Route path="product-manage" element={<ProductManage />} />
                                <Route
                                    path="register-package-group-or-account"
                                    element={<RegisterPackageGroupOrAcc />}
                                />
                            </Route>
                        </Routes>
                    </span>

                    <ToastContainer
                        className="toast-container"
                        toastClassName="toast-item"
                        bodyClassName="toast-item-body"
                        autoClose={false}
                        hideProgressBar={true}
                        pauseOnHover={false}
                        pauseOnFocusLoss={true}
                        closeOnClick={false}
                        draggable={false}
                        closeButton={<CustomToastCloseButton />}
                    />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
