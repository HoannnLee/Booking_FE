import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import { history } from '../redux';
import { Navigate } from 'react-router-dom';
// import { replace } from 'lodash';

export const userIsAuthenticated = connectedRouterRedirect({
    authenticatedSelector: (state) => state.user.isLoggedIn,
    wrapperDisplayName: 'UserIsAuthenticated',
    redirectPath: '/login',
    redirectAction: () => () => {
        history.replace('/login'); // ← Tránh lỗi undefined.replace
    },
});

export const userIsNotAuthenticated = connectedRouterRedirect({
    authenticatedSelector: (state) => !state.user?.isLoggedIn,
    wrapperDisplayName: 'UserIsNotAuthenticated',
    redirectPath: '/',
    allowRedirectBack: false,
    redirectAction: <Navigate to="/" replace={true} />,
});
