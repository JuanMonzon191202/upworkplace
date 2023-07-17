import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentRole, logOut } from "../app/states/auth";
import logo from "/logo.png";

const AppNavbar = () => {
  const dispatch = useDispatch();

  const roles = useSelector(selectCurrentRole);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="nav-link" to="/">
          <a className="navbar-brand">
            <img src={logo} alt="UpWorkPlace" width="60" height="60" />
          </a>
        </NavLink>

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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
            </li>
            {roles && roles === "EMPRESA" && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/empresa/empleos">
                  Mis empleos
                </NavLink>
              </li>
            )}
            {roles && roles === "ALUMNO" && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/empleos">
                    Buscar Empleo
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/postulaciones">
                    Solicutudes
                  </NavLink>
                </li>
              </>
            )}
            {roles ? (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => dispatch(logOut())}
                >
                  Cerrar sesión
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Iniciar Sesión
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default AppNavbar;
