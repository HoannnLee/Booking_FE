import { dateFilter } from 'react-bootstrap-table2-filter';
import httpRequest from '../httpRequest';

const handleLoginApi = async (email, password) => {
    try {
        const res = await httpRequest.post('/api/login', { email, password });

        return res.data;
    } catch (error) {
        throw error.message;
    }
};

const getAllUsers = async (inputId) => {
    try {
        const res = await httpRequest.get(`/api/get-all-user?id=${inputId}`);

        return res.data;
    } catch (error) {
        throw error.message;
    }
};

const createNewUserService = async (data) => {
    try {
        const res = await httpRequest.post('/api/create-new-user', data);

        return res.data;
    } catch (error) {
        throw error.message;
    }
};

export { handleLoginApi, getAllUsers, createNewUserService };
