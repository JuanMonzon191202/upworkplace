import { baseApi } from "../../services";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../app/states/auth";

const Applications = () => {
  const user = useSelector(selectCurrentUser);
  const applications = baseApi.getApplications.useQuery({
    alumn: user?.alumn.enrollment,
  });

  // Filtrar las aplicaciones que no tienen el estado "eliminado"
  const filteredApplications = applications.data?.filter(
    (application) => application.status !== "eliminado"
  );

  return (
    <>
      <div className="container mt-4 p-0">
        <h5 className="mb-3">Postulaciones</h5>
        <div className="row gx-3">
          {filteredApplications?.map(({ job, alumn, ...data }) => (
            <div className="col-6 col-md-4 p-2" key={data.id}>
              <div className="card border shadow h-100">
                <div className="card-body">
                  <div className="job-title">{job.title}</div>
                  <div>
                    Nombre: {alumn.first_name} {alumn.last_name}{" "}
                    {alumn.second_last_name}
                  </div>
                  <div>Carrera: {alumn.career.name}</div>
                  <div>Teléfono: {alumn.career.phone}</div>
                  {data.message && <div>Mensaje: {data.message}</div>}
                  {data.interview_date && (
                    <div>
                      Dia de entrevista: {data.interview_date.slice(0, 10)}
                    </div>
                  )}
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
                </div>
                <div className="card-footer">
                  <div
                    className="status"
                    style={{
                      backgroundColor:
                        data.status === "aceptado"
                          ? "#00FF3E"
                          : data.status === "rechazado"
                          ? "#FF8678"
                          : data.status === "visto"
                          ? "#00FFC9"
                          : data.status === "programado para entrevistar"
                          ? "#A778FF"
                          : data.status === "postulado"
                          ? "#E8FF00"
                          : "",
                      borderRadius: 20,
                    }}
                  >
                    Estatus: {data.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Applications;
