/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return;
    }

    if (user) {
        return children;
    }

    return <Navigate state={location?.pathname} to="/signIn" replace />
};

export default PrivateRoute;