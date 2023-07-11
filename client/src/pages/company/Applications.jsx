import { baseApi } from "../../services";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../app/states/auth";
import { Link, useParams } from "react-router-dom";
import { Modal } from "bootstrap";
import { useState } from "react";

const Applications = () => {
  const params = useParams();
  const user = useSelector(selectCurrentUser);

  const [applicationSelect, setApplicationSelect] = useState(null);

  const [patchApplication] = baseApi.patchApplications.useLazyQuery();
  const applications = baseApi.getApplications.useQuery({
    job: params.id,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setApplicationSelect((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleOpenModalEdit = (job) => {
    setApplicationSelect(job);
    var myModalEl = document.getElementById("editModal");
    var modal = new Modal(myModalEl);
    modal.show();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(applicationSelect);
    const res = await patchApplication({
      id: applicationSelect.id,
      body: applicationSelect,
    });
    if (res.isSuccess) {
      var myModalEl = document.getElementById("editModal");
      var modal = Modal.getInstance(myModalEl);
      modal.hide();
      applications.refetch();
    } else {
      console.log(res.error.data);
      // TODO: mostrar mensaje de error
    }
  };

  return (
    <>
      <div className="container mt-4 p-0">
        <h5 className="mb-3">Postulaciones</h5>
        <div className="row gx-3">
          {applications.data?.map(({ job, alumn, ...data }) => (
            <div className="col-6 col-md-4" key={data.id}>
              <div className="card border shadow h-100">
                <div className="card-body">
                  <div className="job-title">{job.title}</div>
                  <div>
                    Nombre: {alumn.first_name} {alumn.last_name}{" "}
                    {alumn.second_last_name}
                  </div>
                  <div>Carrera: {alumn.career.name}</div>
                  <div>Teléfono: {alumn.career.phone}</div>
                  <div>
                    Curriculum:{" "}
                    <a
                      href={data.cv}
                      target="_blank"
                      className="text-decoration-none"
                    >
                      Ver
                    </a>
                  </div>
                  <div>Estatus: {data.status}</div>
                </div>
                <div className="card-footer border-0 d-flex justify-content-end">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleOpenModalEdit(data)}
                  >
                    Revisar
                  </button>
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
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-group mb-3">
                  <label htmlFor="status">Estatus</label>
                  <select
                    id="status"
                    name="status"
                    className="form-select"
                    value={applicationSelect?.status ?? ""}
                    onChange={onChange}
                  >
                    <option value="postulado">Postulado</option>
                    <option value="visto">Visto</option>
                    <option value="programado para entrevistar">
                      Programado para entrevistar
                    </option>
                    <option value="aceptado">Aceptado</option>
                    <option value="rechazado">Rechazado</option>
                    <option value="eliminado">Eliminado</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="interview_date">Fecha de Entrevista</label>
                  <input
                    type="date"
                    id="interview_date"
                    name="interview_date"
                    className="form-control"
                    value={applicationSelect?.interview_date ?? ""}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    value={applicationSelect?.message ?? ""}
                    onChange={onChange}
                  />
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
export default Applications;
