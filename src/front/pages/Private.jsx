import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Private = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      alert("No tienes acceso. Inicia sesión primero.");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="container mt-5">
      <h2>Área Privada</h2>
      <p>🎉 Bienvenido al área privada. Solo los usuarios autenticados pueden ver esto.</p>
    </div>
  );
};

export default Private;
