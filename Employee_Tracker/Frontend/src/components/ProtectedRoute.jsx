// src/components/ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import PropTypes from "prop-types"
const ProtectedRoute = ({ children }) => {
    const { token, loading } = useContext(AuthContext);

    if (loading) return <div>Loading...</div>; // Optional loading state

    return token ? children : <Navigate to="/login" />;
};


ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
