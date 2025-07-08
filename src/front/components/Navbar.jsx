import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();
	const token = sessionStorage.getItem("token");

	const handleLogout = () => {
		sessionStorage.removeItem("token");
		alert("Has cerrado sesión");
		navigate("/login");
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto d-flex gap-2">
					{!token ? (
						<>
							<Link to="/signup">
								<button className="btn btn-outline-primary">Registro</button>
							</Link>
							<Link to="/login">
								<button className="btn btn-outline-success">Login</button>
							</Link>
						</>
					) : (
						<>
							<Link to="/private">
								<button className="btn btn-outline-secondary">Área Privada</button>
							</Link>
							<button className="btn btn-danger" onClick={handleLogout}>
								Cerrar Sesión
							</button>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};
