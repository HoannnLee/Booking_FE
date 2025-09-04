// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends React.Component {
    render() {
        const { isLoggedIn, element: Element } = this.props;

        if (!isLoggedIn) {
            return <Navigate to="/login" replace />;
        }

        return <Element />;
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.user.isLoggedIn,
});

export default connect(mapStateToProps)(PrivateRoute);
