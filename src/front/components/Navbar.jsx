import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();
	const token = sessionStorage.getItem("token");
	const userName = sessionStorage.getItem("user_name");

	const handleLogout = () => {
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("user_name");
		alert("Has cerrado sesión");
		navigate("/login");
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				{/* ✅ Nuevo botón "Inicio" */}
				<Link to="/" className="btn btn-outline-dark me-2">
					Inicio
				</Link>
				{/* ✅ Saludo en lugar del título fijo */}
				<span className="navbar-text fw-bold">
					{token ? (
						<Link to="/private" className="text-decoration-none text-dark">
							Hola, {userName}
						</Link>
					) : (
						"Bienvenido"
					)}
				</span>

				{/* Menú hamburguesa solo en pantallas pequeñas */}
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul className="navbar-nav align-items-center gap-2">
						{token ? (
							<>
								<li className="nav-item">
									<Link to="/private" className="btn btn-outline-secondary">
										Área Privada
									</Link>
								</li>
								<li className="nav-item">
									<button className="btn btn-danger" onClick={handleLogout}>
										Cerrar Sesión
									</button>
								</li>
							</>
						) : (
							<>
								<li className="nav-item">
									<Link to="/signup" className="btn btn-outline-primary">
										Registro
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/login" className="btn btn-outline-success">
										Login
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};