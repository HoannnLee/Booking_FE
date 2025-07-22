import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import { history } from '../redux';
import { Navigate } from 'react-router-dom';

export const userIsAuthenticated = connectedRouterRedirect({
    authenticatedSelector: (state) => state.admin.isLoggedIn,
    wrapperDisplayName: 'UserIsAuthenticated',
    redirectPath: '/login',
    redirectAction: () => (dispatch, getState) => {
        history.replace('/login'); // ← Tránh lỗi undefined.replace
    },
});

export const userIsNotAuthenticated = connectedRouterRedirect({
    authenticatedSelector: (state) => !state.admin?.isLoggedIn,
    wrapperDisplayName: 'UserIsNotAuthenticated',
    redirectPath: '/',
    allowRedirectBack: false,
    redirectAction: () => (dispatch, getState) => {
        history.replace('/');
    },
});
