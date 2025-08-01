import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
// import { history } from '../redux';
import { ToastContainer } from 'react-toastify';

import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';

import { path } from '../utils';

import Home from '../routes/Home';
// import Login from '../routes/Login';
import Login from './Auth/Login';
import Header from './Header/Header';
import System from '../routes/System';

import { CustomToastCloseButton } from '../components/CustomToast';
import ConfirmModal from '../components/ConfirmModal';

const LoginWrapped = userIsNotAuthenticated(Login);
const SystemWrapped = userIsAuthenticated(System);

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
                            <Route path={path.LOGIN} element={<LoginWrapped />} />
                            <Route path={path.SYSTEM} element={<SystemWrapped />} />
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
