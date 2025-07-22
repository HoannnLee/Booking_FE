// src/store/reducers/userReducer.js

const initialState = {
    isAuthenticated: false,
    userInfo: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                isAuthenticated: true,
                userInfo: action.payload,
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default userReducer;
