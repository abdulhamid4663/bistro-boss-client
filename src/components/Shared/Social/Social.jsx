import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const Social = () => {
    const { googleLogin } = useAuth();
    const axios = useAxios();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const userInfo = {
                    displayName: result.user.displayName,
                    email: result.user.email
                }
                axios.post(`/users`, userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
                navigate('/')
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    return (
        <button onClick={handleGoogleLogin} className="btn w-full bg-[#DBB984] items-center text-blue-600">
            <FcGoogle />
            Login with Google
        </button>
    );
};

export default Social;