import { Link } from "react-router-dom";
const Propuestas = ({ propuesta }) => {
  return (
    <div className="col">
      <div className="card h-100 ">
        <div className="card-body">
          <h5 className="card-title">{propuesta.nombrePropuesta}</h5>
          <p className="card-text">
            {propuesta.descriptionPropuesta.slice(0, 50)}...
          </p>
        </div>
        <div className="card-footer">
          <small className="text-nuted">
            {propuesta.requisitos.slice(0, 25)}...
          </small>
        </div>
      </div>
    </div>
  );
};

export default Propuestas;
