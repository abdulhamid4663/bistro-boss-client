import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
})

const useAxiosSecure = () => {
    const { logoutUser } = useAuth();
    const navigate = useNavigate();

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`
        // Do something before request is sent
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, async function (error) {
        const status = error.response.status;
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        if (status === 401 || status === 403) {
            await logoutUser()
            navigate('/signIn')
        }

        return Promise.reject(error);
    });

    return axiosSecure;
};

export default useAxiosSecure;