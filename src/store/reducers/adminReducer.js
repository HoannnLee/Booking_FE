import actionTypes from '../actions/actionTypes';

const initialState = {
    gender: [],
    role: [],
    positions :[]
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log("check actions ", action)
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            const coppyState = {...state}
            coppyState.gender = action.data
            console.log("Check fetch gender success: ", coppyState)
            return {
                ...coppyState,
            }
        default:
            return state;
    }
}

export default adminReducer;