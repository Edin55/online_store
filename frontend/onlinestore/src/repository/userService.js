import axios from '../axios_instance/axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
    getPublicContent() {
        return axios.get('/api/test/all');
    }

    getUserBoard() {
        return axios.get('/api/test/user', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get('/api/test/mod', { headers: authHeader() });
    }

    getAdminBoard() {
        let header = authHeader();
        return axios.get('/api/test/admin', { headers: header });
    }
}

export default new UserService();