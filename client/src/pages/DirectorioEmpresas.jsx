import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SolicitudesRechazadas = () => {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/Empresa")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        setSolicitudes(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="mb-4">Directorio de Empresas</h1>
      {solicitudes.map((solicitud) => (
        <div key={solicitud.id} className="card mb-3 ">
          <div className="card-body">
            <h5 className="card-title">{solicitud.nombreEmpresa}</h5>
            <p className="card-text">{solicitud.nombreProyecto}</p>

            {/* Redirigir al detalle de la solicitud */}
            <Link
              to={`/#/${solicitud.id}`}
              className="btn btn-primary"
            >
              Ver Detalles
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SolicitudesRechazadas;
