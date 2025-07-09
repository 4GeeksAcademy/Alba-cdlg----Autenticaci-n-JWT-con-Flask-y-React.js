import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const token = sessionStorage.getItem("token");

    // ✅ Si no hay token, redirige a /login
    if (!token) {
        alert("Debes iniciar sesión para acceder.");
        return <Navigate to="/login" replace />;
    }

    // ✅ Si hay token, muestra el componente hijo
    return children;
};

export default PrivateRoute;
