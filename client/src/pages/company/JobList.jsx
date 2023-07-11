import { baseApi } from "../../services";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../app/states/auth";
import { Link } from "react-router-dom";
import { Modal } from "bootstrap";
import { useState } from "react";

const JobList = () => {
  const user = useSelector(selectCurrentUser);

  const [jobSelected, setJobSelected] = useState({});
  const [jobPost, setJobPost] = useState({});

  const carees = baseApi.getCarees.useQuery();
  const jobs = baseApi.getJobs.useQuery({
    company: user?.company.id,
  });

  const [pathJob] = baseApi.patchJobs.useLazyQuery();
  const [postJob] = baseApi.postJobs.useLazyQuery();

  const onChangeEdit = (e) => {
    const { name, value } = e.target;
    setJobSelected((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const onChangeAdd = (e) => {
    const { name, value } = e.target;
    setJobPost((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleOpenModalEdit = (job) => {
    setJobSelected(job);
    var myModalEl = document.getElementById("editModal");
    var modal = new Modal(myModalEl);
    modal.show();
  };
  const handleOpenModalAdd = () => {
    var myModalEl = document.getElementById("addModal");
    var modal = new Modal(myModalEl);
    modal.show();
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    const res = await pathJob({ id: jobSelected.id, body: jobSelected });
    if (res.isSuccess) {
      var myModalEl = document.getElementById("editModal");
      var modal = Modal.getInstance(myModalEl);
      modal.hide();
      jobs.refetch();
    } else {
      console.log(res.error.data);
      // TODO: mostrar mensaje de error
    }
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    const res = await postJob({ ...jobPost, company: user?.company.id });
    if (res.isSuccess) {
      var myModalEl = document.getElementById("addModal");
      var modal = Modal.getInstance(myModalEl);
      modal.hide();
      jobs.refetch();
    } else {
      console.log(res.error.data);
      // TODO: mostrar mensaje de error
    }
  };

  return (
    <>
      <div className="container mt-4">
        <div className="d-flex justify-content-between">
          <h5 className="mb-3">Postulaciones</h5>
          <button
            type="button"
            className="btn btn-success mb-3"
            onClick={handleOpenModalAdd}
          >
            Agregar
          </button>
        </div>
        <div className="row gx-3">
          {jobs.data?.map((job) => (
            <div className="col-6" key={job.id}>
              <div className="card border shadow h-100">
                <div className="card-body">
                  <div className="job-title">
                    <Link
                      to={`/empresa/empleos/${job.id}`}
                      className="text-decoration-none"
                    >
                      {job.title}
                    </Link>
                  </div>
                  <p className="job-description">{job.description}</p>
                </div>
                <div
                  className="card-footer p-2 border-0 d-flex justify-content-between"
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
                        onClick={() => handleOpenModalEdit(job)}
                      >
                        Editar
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Editar */}
      <div className="modal fade" tabIndex="-1" id="editModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Editar Empleo</h5>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmitEdit}>
              <div className="modal-body">
                <div className="form-group mb-3">
                  <label htmlFor="title">Titulo</label>
                  <input
                    id="title"
                    name="title"
                    className="form-control"
                    required
                    value={jobSelected?.title ?? ""}
                    onChange={onChangeEdit}
                  />
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="workplace">Modalidad</label>
                      <select
                        id="workplace"
                        name="workplace"
                        className="form-select"
                        value={jobSelected?.workplace ?? ""}
                        onChange={onChangeEdit}
                      >
                        <option value="">SELECCIONA</option>
                        <option value="remoto">Remoto</option>
                        <option value="presencial">Presencial</option>
                        <option value="híbrido">Híbrido</option>
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="job_type">Tipo de empleo</label>
                      <select
                        id="job_type"
                        name="job_type"
                        className="form-select"
                        value={jobSelected?.job_type ?? ""}
                        onChange={onChangeEdit}
                      >
                        <option value="">SELECCIONA</option>
                        <option value="tiempo completo">Tiempo completo</option>
                        <option value="medio tiempo">Medio tiempo</option>
                        <option value="indeterminado">Indeterminado</option>
                        <option value="temporal">Temporal</option>
                        <option value="voluntariado">Voluntariado</option>
                        <option value="prácticas">Prácticas</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="location">Ubicación</label>
                      <input
                        id="location"
                        name="location"
                        className="form-control"
                        required
                        value={jobSelected?.location ?? ""}
                        onChange={onChangeEdit}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="salary">Salario</label>
                      <input
                        id="salary"
                        name="salary"
                        className="form-control"
                        required
                        value={jobSelected?.salary ?? ""}
                        onChange={onChangeEdit}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="description">Descripción</label>
                  <textarea
                    id="description"
                    name="description"
                    className="form-control"
                    required
                    value={jobSelected?.description ?? ""}
                    onChange={onChangeEdit}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="career">Carrera</label>
                  <select
                    className="form-select"
                    id="career"
                    name="career"
                    value={jobSelected?.career ?? ""}
                    onChange={onChangeEdit}
                  >
                    <option value="">SELECCIONA</option>
                    {carees.data?.map((career) => (
                      <option value={career.id} key={career.id}>
                        {career.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal Agregar */}
      <div className="modal fade" tabIndex="-1" id="addModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Crear Empleo</h5>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmitPost}>
              <div className="modal-body">
                <div className="form-group mb-3">
                  <label htmlFor="title">Titulo</label>
                  <input
                    id="title"
                    name="title"
                    className="form-control"
                    required
                    value={jobPost?.title ?? ""}
                    onChange={onChangeAdd}
                  />
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="workplace">Modalidad</label>
                      <select
                        id="workplace"
                        name="workplace"
                        className="form-select"
                        value={jobPost?.workplace ?? ""}
                        onChange={onChangeAdd}
                      >
                        <option value="">SELECCIONA</option>
                        <option value="remoto">Remoto</option>
                        <option value="presencial">Presencial</option>
                        <option value="híbrido">Híbrido</option>
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="job_type">Tipo de empleo</label>
                      <select
                        id="job_type"
                        name="job_type"
                        className="form-select"
                        value={jobPost?.job_type ?? ""}
                        onChange={onChangeAdd}
                      >
                        <option value="">SELECCIONA</option>
                        <option value="tiempo completo">Tiempo completo</option>
                        <option value="medio tiempo">Medio tiempo</option>
                        <option value="indeterminado">Indeterminado</option>
                        <option value="temporal">Temporal</option>
                        <option value="voluntariado">Voluntariado</option>
                        <option value="prácticas">Prácticas</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="location">Ubicación</label>
                      <input
                        id="location"
                        name="location"
                        className="form-control"
                        required
                        value={jobPost?.location ?? ""}
                        onChange={onChangeAdd}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="salary">Salario</label>
                      <input
                        id="salary"
                        name="salary"
                        className="form-control"
                        required
                        value={jobPost?.salary ?? ""}
                        onChange={onChangeAdd}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="description">Descripción</label>
                  <textarea
                    id="description"
                    name="description"
                    className="form-control"
                    required
                    value={jobPost?.description ?? ""}
                    onChange={onChangeAdd}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="career">Carrera</label>
                  <select
                    className="form-select"
                    id="career"
                    name="career"
                    value={jobPost?.career ?? ""}
                    onChange={onChangeAdd}
                  >
                    <option value="">SELECCIONA</option>
                    {carees.data?.map((career) => (
                      <option value={career.id} key={career.id}>
                        {career.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default JobList;
