import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importa el componente Link para la navegación

import EmpresaPropuesta from "../components/EmpresaPropuesta";

const AdminView = () => {
  const [propuesta, setPropuesta] = useState([]);

  const getPropuesta = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/EmpresaSolicitud");
    const data = await response.json();
    setPropuesta(data.filter((propuesta) => propuesta.activo === true));
  };

  useEffect(() => {
    getPropuesta();
  }, []);

  return (
    <div className="container mt-3">
      <h1>Solicitudes de las Empresas</h1>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-10 g-3 mt-1">
        {propuesta.map((propuesta) => (
          <div key={propuesta.id}>
            <EmpresaPropuesta propuesta={propuesta} />
            <Link to={`/detalle-propuesta/${propuesta.id}`}>
              <button
                type="button"
                class="btn btn-outline-primary btn-sm btn-block"
              >
                Ver Detalles
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminView;
