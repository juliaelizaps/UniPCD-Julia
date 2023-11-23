import axios from 'axios';

const API_URL = 'http://localhost:3500/api';

const AuthService = {
    login: async (email, password) => {
        try {
            const response = await axios.post(`${API_URL}/login`, {
                email: email,
                password,
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default AuthService;
