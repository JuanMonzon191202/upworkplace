import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { useLoginMutation } from "../../services/auth.service";
import { setCredentials } from "../../app/states/auth";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [login, { reset }] = useLoginMutation();

  const toastRef = useRef();

  const [credential, setCredential] = useState({
    username: "",
    password: "",
    remember: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setCredential((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevenir que se recargue la página
    setIsLoading(true);
    const response = await login(credential); // petición al back-end
    if (response.data) {
      console.log(response.data);
      dispatch(setCredentials(response.data)); // guardado de los datos en el estado global de redux
      setCredential({}); // vaciar estado
      navigate(from, { replace: true }); // navegar el usuario a la ruta necesaria
    }
    setIsLoading(false);
  };

  useEffect(() => {
    reset();
  }, [credential, reset]);

  return (
    <div className="card mt-5 w-50">
      <div className="card-body">
        <h3 className="card-title text-center">Inicio de sesión</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              autoFocus
              value={credential.username}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={credential.password}
              onChange={onChange}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
