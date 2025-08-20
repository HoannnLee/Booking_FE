// src/components/PublicOnlyRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

class PublicOnlyRoute extends React.Component {
    render() {
        const { isLoggedIn, element: Element } = this.props;

        if (isLoggedIn) {
            return <Navigate to="/" replace />;
        }

        return <Element />;
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.user.isLoggedIn,
});

export default connect(mapStateToProps)(PublicOnlyRoute);
