import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminView = () => {
  const [propuesta, setPropuesta] = useState([]);

  const getPropuesta = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/EmpresaSolicitud"
      );
      const data = await response.json();
      console.log(data); // Imprime los datos recibidos de la API
      const filteredPropuesta = data.filter(
        (propuesta) => propuesta.activo === true
      );
      console.log(filteredPropuesta); // Imprime los datos filtrados
      setPropuesta(filteredPropuesta); // Actualiza el estado con los datos filtrados
    } catch (error) {
      console.log("Error al obtener los datos de la API:", error);
    }
  };

  useEffect(() => {
    getPropuesta();
  }, []);
  // console.log(data);
  // console.log(propuesta);
  return (
    <div className="container mt-3">
      <h1>Solicitudes de las Empresas</h1>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-10 g-3 mt-1">
        {propuesta.map((propuesta) => (
          <div className="col" key={propuesta.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{propuesta.nombreEmpresa}</h5>
                <p className="card-text">{propuesta.nombreProyecto}</p>
              </div>
              <div className="card-footer">
                <small className="text-nuted">{propuesta.carrera.nombre}</small>
              </div>
              <Link to={`/detalle-propuesta/${propuesta.id}`}>
                <button type="button" className="btn btn-outline-primary">
                  Ver Detalles
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminView;
