import axios from 'axios';
import _ from 'lodash';
// import config from './config';

const httpRequest = axios.create({
    // trong ứng dụng vite nên tiếp đầu ngữ phải là VITE_BACKEND_URL thì nó mới nhận được giá trị
    baseURL: import.meta.env.VITE_BACKEND_URL,
    // withCredentials: true,
});

export const get = async (path, options = {}) => {
    const respone = await httpRequest.get(path, options);
    return respone.data;
};
export const post = async (path, options = {}) => {
    const respone = await httpRequest.post(path, options);
    return respone.data;
};

// const createError = (httpStatusCode, statusCode, errorMessage, problems, errorCode = '') => {
//     const error = new Error();
//     error.httpStatusCode = httpStatusCode;
//     error.statusCode = statusCode;
//     error.errorMessage = errorMessage;
//     error.problems = problems;
//     error.errorCode = errorCode + '';
//     return error;
// };

// export const isSuccessStatusCode = (s) => {
//     // May be string or number
//     const statusType = typeof s;
//     return (statusType === 'number' && s === 0) || (statusType === 'string' && s.toUpperCase() === 'OK');
// };

// instance.interceptors.response.use(
//     (response) => {
//         // Thrown error for request with OK status code
//         const { data } = response;
//         if (data.hasOwnProperty('s') && !isSuccessStatusCode(data['s']) && data.hasOwnProperty('errmsg')) {
//             return Promise.reject(
//                 createError(response.status, data['s'], data['errmsg'], null, data['errcode'] ? data['errcode'] : ''),
//             );
//         }

//         // Return direct data to callback
//         if (data.hasOwnProperty('s') && data.hasOwnProperty('d')) {
//             return data['d'];
//         }
//         // Handle special case
//         if (data.hasOwnProperty('s') && _.keys(data).length === 1) {
//             return null;
//         }
//         return response.data;
//     },
//     (error) => {
//         const { response } = error;
//         if (response == null) {
//             return Promise.reject(error);
//         }

//         const { data } = response;

//         if (data.hasOwnProperty('s') && data.hasOwnProperty('errmsg')) {
//             return Promise.reject(createError(response.status, data['s'], data['errmsg']));
//         }

//         if (data.hasOwnProperty('code') && data.hasOwnProperty('message')) {
//             return Promise.reject(createError(response.status, data['code'], data['message'], data['problems']));
//         }

//         return Promise.reject(createError(response.status));
//     },
// );

export default httpRequest;
