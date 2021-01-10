import axios from 'axios'
import {API_URL} from './Constants';
class AuthenticationService {
    myInterceptor = ''
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem("authenticatedUser", username);
        this.setupAxiosInterceptor(username, password);
    }
    registerSuccessfulLoginForJWT(username, token) {
        sessionStorage.setItem("authenticatedUser", username);
        this.setupAxiosInterceptor(this.getJWTToken(token));
    }

    logout() {
        sessionStorage.removeItem("authenticatedUser");
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem("authenticatedUser");
        if (user === null) return false;
        else
            return true;
    }
    performBasicAuthentication(username, password) {
        return axios.get(`${API_URL}/basicAuth`,
            {
                headers: {
                    authorization: this.getAuthToken(username, password)
                }
            });
    }

    performJWTAuthentication(username, password) {
        return axios.post(`${API_URL}/authenticate`,
            {
                username,password
            });
    }

    getAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }
    getJWTToken(token) {
        return 'Bearer ' + token
    }
    setupAxiosInterceptor(authHeader) {
        this.myInterceptor= axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn) {
                    config.headers.authorization = authHeader
                }
                return config
            }
        )
    }
    disableAxiosInterceptors() {
        axios.interceptors.request.eject(this.myInterceptor)
    }

    getUserName() {
        return sessionStorage.getItem("authenticatedUser");
    }

}

export default new AuthenticationService()