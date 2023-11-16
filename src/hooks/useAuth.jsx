import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    if (!auth) {
        return { user: null, loading: true, /* other default values */ };
    }
    return auth;
};

export default useAuth;