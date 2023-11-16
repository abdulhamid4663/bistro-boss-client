import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
})

const useAxios = () => {
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

    return instance
};

export default useAxios;