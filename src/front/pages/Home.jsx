import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
	const token = sessionStorage.getItem("token");
	const userName = sessionStorage.getItem("user_name");

	return (
		<div className="container text-center mt-5">
			{/* ✅ Título principal */}
			<h1 className="display-4 mb-4">
				{token ? `Bienvenido/a, ${userName}` : "Bienvenido/a a nuestra App"}
			</h1>

			{/* ✅ Subtítulo dinámico */}
			<p className="lead mb-4">
				{token
					? "Accede a tu área privada para ver contenido exclusivo."
					: "Regístrate o inicia sesión para acceder a todas las funcionalidades."}
			</p>

			{/* ✅ Botones dinámicos */}
			<div className="d-flex justify-content-center gap-3">
				{token ? (
					<Link to="/private" className="btn btn-success btn-lg">
						Ir al Área Privada
					</Link>
				) : (
					<>
						<Link to="/signup" className="btn btn-primary btn-lg">
							Registro
						</Link>
						<Link to="/login" className="btn btn-outline-success btn-lg">
							Login
						</Link>
					</>
				)}
			</div>
		</div>
	);
};
