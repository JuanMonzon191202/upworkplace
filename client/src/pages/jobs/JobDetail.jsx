import { useParams } from "react-router-dom";
import { baseApi } from "../../services";

const JobDetail = () => {
  const params = useParams();

  const job = baseApi.getJobsById.useQuery(params.id);

  // Verifica si los datos del trabajo están disponibles
  if (job.isLoading) {
    // Muestra un mensaje de carga mientras se obtienen los datos
    return <div>Cargando...</div>;
  }

  if (job.error) {
    // Muestra un mensaje de error si hay un problema al obtener los datos
    return <div>Error al cargar los datos del trabajo.</div>;
  }

  // Desestructura los datos del trabajo
  const { company, title, workplace, location, job_type, description, salary } =
    job.data;

  return (
    <div className="container p-5">
      <div className="card shadow border-1 ">
        <img
          src={company.logo}
          className="card-img-top"
          style={{ width: "10%" }}
          alt={company.name}
        />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Compañía: {company.name}</p>
          <p className="card-text">Email: {company.email}</p>
          <p className="card-text">Teléfono: {company.phone}</p>
          <p className="card-text">Lugar de trabajo: {workplace}</p>
          <p className="card-text">Descripción: {description}</p>
        </div>
        <div
          className="card-footer p-3 border-0 d-flex justify-content-between"
          style={{ backgroundColor: "#f1f1f1" }}
        >
          <div>
            <span>
              <i className="fas fa-map-marker-alt" />
              {location}
            </span>
            <span>
              <i className="fas fa-briefcase" />
              {job_type}
            </span>
            <span>
              <i className="fas fa-wallet" />${salary}
            </span>
            <span>
              <i className="far fa-clock" /> Hace 2 Dias
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
