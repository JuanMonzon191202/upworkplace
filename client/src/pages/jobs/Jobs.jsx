import { useState, useRef } from "react";
import { baseApi } from "../../services";
import { Link } from "react-router-dom";
import { Modal } from "bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../app/states/auth";

const Jobs = () => {
  const modalRef = useRef(null);
  const user = useSelector(selectCurrentUser);

  const [jobSelected, setJobSelected] = useState(null);
  const [filter, setFilter] = useState({
    search: "",
    career: "",
    job_type: "",
    workplace: "",
  });

  const carees = baseApi.getCarees.useQuery();
  const jobs = baseApi.getJobs.useQuery(filter);
  const [postApplications] = baseApi.postApplications.useLazyQuery();

  const onChangeFilter = (e) => {
    const { name, value } = e.target;
    setFilter((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleOpenModal = (job) => {
    setJobSelected(job);
    var myModalEl = document.getElementById("applicationModal");
    var modal = new Modal(myModalEl);
    modal.show();
  };

  const handleCloseModal = () => {
    var myModalEl = document.getElementById("applicationModal");
    var modal = Modal.getInstance(myModalEl);
    modal.hide();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = new FormData(e.target);
    const res = await postApplications(body);
    if (res.isSuccess) {
      handleCloseModal();
    } else {
      console.log(res.error.data);
      // TODO: mostrar mensaje de error
    }
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {/* Filtro */}
          <div className="col-md-4 p-2 pe-4">
            <div className="mb-3">
              <label htmlFor="search" className="form-label">
                Palabras clave
              </label>
              <input
                type="text"
                className="form-control"
                id="search"
                name="search"
                placeholder="Puesto, área laboral o empresa"
                onChange={onChangeFilter}
                value={filter.search}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Carrera
              </label>
              <select
                className="form-select"
                id="career"
                name="career"
                onChange={onChangeFilter}
                value={filter.career}
              >
                <option value="">TODAS</option>
                {carees.data?.map((career) => (
                  <option value={career.id} key={career.id}>
                    {career.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="job_type">
                Tipo de trabajo
              </label>
              <select
                id="job_type"
                name="job_type"
                className="form-select"
                onChange={onChangeFilter}
                value={filter.job_type}
              >
                <option value="">TODAS</option>
                <option value="tiempo completo">Tiempo completo</option>
                <option value="medio tiempo">Medio tiempo</option>
                <option value="indeterminado">Indeterminado</option>
                <option value="temporal">Temporal</option>
                <option value="voluntariado">Voluntariado</option>
                <option value="prácticas">Prácticas</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="workplace">
                Modalidad
              </label>
              <select
                id="workplace"
                name="workplace"
                className="form-select"
                onChange={onChangeFilter}
                value={filter.workplace}
              >
                <option value="">TODAS</option>
                <option value="remoto">Remoto</option>
                <option value="presencial">Presencial</option>
                <option value="híbrido">Híbrido</option>
              </select>
            </div>
          </div>

          {/* Resultados */}
          <div className="col-md-8 p-2">
            <h5>Resultados de Búsqueda</h5>
            {jobs.data?.map((job) => (
              <div className="card border shadow mb-4" key={job.id}>
                <div className="row p-2">
                  <div className="col-md-1 d-flex align-items-center ">
                    <img
                      src={job.company.logo}
                      alt={job.company.name}
                      className="ms-2"
                      width={50}
                    />
                  </div>
                  <div className="col-md-11">
                    <div className="card-body">
                      <div className="company-name">{job.company.name}</div>
                      <div className="job-title">
                        <Link
                          to={`/empleos/${job.id}`}
                          className="text-decoration-none"
                        >
                          {job.title}
                        </Link>
                      </div>
                      <p className="job-description">{job.description}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="card-footer p-3 border-0 d-flex justify-content-between"
                  style={{ backgroundColor: "#f1f1f1" }}
                >
                  <div>
                    <span>
                      <i className="fas fa-map-marker-alt" />
                      {job.location}
                    </span>
                    <span>
                      <i className="fas fa-briefcase" />
                      {job.job_type}
                    </span>
                    <span>
                      <i className="fas fa-wallet" />${job.salary}
                    </span>
                    <span>
                      <i className="far fa-clock" /> Hace 2 Dias
                    </span>
                  </div>
                  <div>
                    <span>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleOpenModal(job)}
                      >
                        Postular
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        tabIndex="-1"
        ref={modalRef}
        id="applicationModal"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Postulación al Empleo</h5>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                {/* // TODO: mostrar información del empleo seleccionado */}
                <input
                  type="text"
                  name="job"
                  defaultValue={jobSelected?.id}
                  hidden
                />
                <input
                  type="text"
                  name="alumn"
                  defaultValue={user?.alumn?.enrollment}
                  hidden
                />
                <div className="form-group">
                  <label htmlFor="cv">Currículum</label>
                  <input
                    id="cv"
                    name="cv"
                    className="form-control"
                    required
                    type="file"
                    accept=".pdf,.doc,.docx"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Enviar postulación
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Jobs;
