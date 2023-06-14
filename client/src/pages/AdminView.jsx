import { Link } from "react-router-dom";
// console.log(propuesta);
const AdminView = () => {
  return (
    <div className="container">
      <h1>Dashboard del Administrador</h1>
      <div className="row">
        <div className="col-md-6">
          <Link to="/propuestas-view-admin" style={rectangleStyles}>
            Ver Solicitudes de Propuestas
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/solicitudes-rechazadas" style={rectangleStyles}>
            Solicitudes Rechazadas
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/Solicitudes-Aceptadas" style={rectangleStyles}>
            solicitudes Aceptadas
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/Propuestas-Alta" style={rectangleStyles}>
            Propuestas Dadas de Alta
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/Directorio-empresas" style={rectangleStyles}>
            Directorio de Empresas
          </Link>
        </div>
        {/* Agrega más rectángulos con sus respectivas rutas */}
      </div>
    </div>
  );
};

export default AdminView;

const rectangleStyles = {
  display: "block",
  padding: "10px",
  margin: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  background: "#f0f0f0",
  color: "#333",
  textDecoration: "none",
};
