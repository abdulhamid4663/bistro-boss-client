import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
})

const useAxiosSecure = () => {
    // const { logoutUser } = useAuth();

    // useEffect(() => {
    //     axios.interceptors.response.use(function (response) {
    //         return response;
    //     }, function (error) {
    //         if (error.response.status === 401 || error.response.status === 403) {
    //             logoutUser()
    //                 .then(() => {
    //                     toast.warning("Please login again")
    //                 })
    //         }
    //     });
    // }, []);

    return axiosSecure;
};

export default useAxiosSecure;