import httpRequest from '../httpRequest';

const handleLoginApi = async (email, password) => {
    try {
        const res = await httpRequest.post('/api/login', { email, password });

        return res.data;
    } catch (error) {
        throw error.message;
    }
};

export { handleLoginApi };
