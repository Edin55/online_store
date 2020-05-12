import axios from "../axios_instance/axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    login(username, password) {
        debugger;
        return axios
            .post(API_URL + "signin", {
                username,
                password
            })
            .then(response => {
                debugger;
                if (response.data.accessToken) {
                    console.log(response.data);
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            }).catch(err =>{
                console.log(err);
            });
        debugger;
    }

    logout() {
        debugger;
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        debugger;
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();