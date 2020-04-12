import axios from 'axios';

const UserService  = {
    login: () => {
        return axios.get("/user");
    }

};
export default UserService;