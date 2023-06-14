const EmpresaPropuesta = ({ propuesta }) => {
  console.log(propuesta);
  return (
    <div className="col">
      <div className="card h-100 ">
        <div className="card-body">
          <h5 className="card-title">{propuesta.nombreEmpresa}</h5>
          <p className="card-text">{propuesta.nombreProyecto}</p>
        </div>
        <div className="card-footer">
          {/* <small className="text-muted">{propuesta.carrera}</small> */}
        </div>
      </div>
    </div>
  );
};

export default EmpresaPropuesta;
