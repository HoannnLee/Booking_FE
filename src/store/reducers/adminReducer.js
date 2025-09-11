import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender:false,
    gender: [],
    role: [],
    position :[]
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        //gender
        case actionTypes.FETCH_GENDER_START:
            const copyStateGenderStart = {...state};
            copyStateGenderStart.isLoadingGender = true;
            return {
                ...copyStateGenderStart,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            const copyStateGenderFailed = {...state}
            copyStateGenderFailed.isLoadingGender = false;
            copyStateGenderFailed.gender = [];
            
            return {
                ...copyStateGenderFailed,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            const copyStateGenderSuccess = {...state}
            copyStateGenderSuccess.isLoadingGender = false;
            copyStateGenderSuccess.gender = action.data
           
            return {
                ...copyStateGenderSuccess,
            }

            //role
        case actionTypes.FETCH_ROLE_START:
            const copyStateRoleStart = {...state};
            copyStateRoleStart.isLoadingGender = true;

            return {
                ...copyStateRoleStart,
            }
        case actionTypes.FETCH_ROLE_FAILED:
            const copyStateRoleFailed = {...state}
            copyStateRoleFailed.isLoadingGender = false;
            copyStateRoleFailed.role = [];
            
            return {
                ...copyStateRoleFailed,
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            const copyStateRoleSuccess = {...state}
            copyStateRoleSuccess.isLoadingGender = false;
            copyStateRoleSuccess.role = action.data
     
            return {
                ...copyStateRoleSuccess,
            }

            //position
        case actionTypes.FETCH_POSITION_START:
            const copyStatePositionStart = {...state};
            copyStatePositionStart.isLoadingGender = true;

            return {
                ...copyStatePositionStart,
            }
        case actionTypes.FETCH_POSITION_FAILED:
            const copyStatePositionFailed = {...state}
            copyStatePositionFailed.isLoadingGender = false;
            copyStatePositionFailed.position = [];
            
            return {
                ...copyStatePositionFailed,
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            const copyStatePositionSuccess = {...state}
            copyStatePositionSuccess.isLoadingGender = false;
            copyStatePositionSuccess.position = action.data
       

            return {
                ...copyStatePositionSuccess,
            }

        default:
            return state;
    }
}

export default adminReducer;