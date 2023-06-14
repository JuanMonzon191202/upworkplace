import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SolicitudesRechazadas = () => {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/Propuesta")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const solicitudesActivas = data.filter(
          (solicitud) => solicitud.activo === true
        );
        setSolicitudes(solicitudesActivas);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="mb-4">Solicitudes Rechazadas</h1>
      {solicitudes.map((solicitud) => (
        <div key={solicitud.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{solicitud.nombreEmpresa}</h5>
            <p className="card-text">{solicitud.nombreProyecto}</p>

            {/* Redirigir al detalle de la solicitud */}
            <Link
              to={`/Detalle-Propuesta-Alta/${solicitud.id}`}
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
