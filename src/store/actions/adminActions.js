import actionTypes from './actionTypes';
import { getAllCodeService } from "../../services/userService";

export const fetchGenderStart = () => {
    return async (dispath, getState) => {
        try {
            const res = await getAllCodeService("GENDER")
            if(res && res.errCode === 0){
                dispath(fetchGenderSuccess(res.data))
            }else{
                dispath(fecthGenderFailed())
            }
        } catch (error) {
            dispath(fecthGenderFailed())
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

