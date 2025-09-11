import actionTypes from './actionTypes';
import { createNewUserService, getAllCodeService } from "../../services/userService";

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({type : actionTypes.FETCH_GENDER_START})
            const res = await getAllCodeService("GENDER")
            if(res && res.errCode === 0){
                dispatch(fetchGenderSuccess(res.data))
            }else{
                dispatch(fecthGenderFailed())
            }
        } catch (error) {
            dispatch(fecthGenderFailed())
            console.log(error)
        }
    }
}

export const fecthGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED,
});

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data : genderData
});


export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({type : actionTypes.FETCH_ROLE_START})
            const res = await getAllCodeService("ROLE")
           
            if(res && res.errCode === 0){
                dispatch(fetchRoleSuccess(res.data))
            }else{
                dispatch(fecthRoleFailed())
            }
        } catch (error) {
            dispatch(fecthRoleFailed())
            console.log(error)
        }
    }
}

export const fecthRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED,
});

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data : roleData
});

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({type : actionTypes.FETCH_POSITION_START})
            const res = await getAllCodeService("POSITION")
  
            if(res && res.errCode === 0){
                dispatch(fetchPositionSuccess(res.data))
            }else{
                dispatch(fecthPositionFailed())
            }
        } catch (error) {
            dispatch(fecthPositionFailed())
            console.log(error)
        }
    }
}

export const fecthPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED,
});

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data : positionData
});


export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            dispatch({type : actionTypes.CREATE_USER_SUCCESS})
            const res = await createNewUserService(data);
            console.log("Check create new user admin: ", res)
            if(res && res.errCode === 0){
                dispatch(createUserSuccess())
            }else{
                dispatch(createUserFailed())
            }
        } catch (error) {
            dispatch(createUserFailed())
            console.log(error)
        }
    }
}


export const createUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
});

export const createUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED,
   
});