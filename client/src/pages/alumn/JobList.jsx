import { baseApi } from "../../services";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../app/states/auth";
import { Link } from "react-router-dom";
import { useState } from "react";

const JobList = () => {
  const user = useSelector(selectCurrentUser);
  console.log(user);

  const carees = baseApi.getCarees.useQuery();

  const jobs = baseApi.getApplications.useQuery({
    alumn: user?.alumn.enrollment,
  });
  console.log(jobs.data);

  return (
    <>
      <div className="container mt-4">
        <div className="d-flex justify-content-between">
          <h5 className="mb-3">Postulaciones</h5>
        </div>
        <div className="row gx-3">
          {jobs.data?.map((job) => (
            <div className="col-6" key={job.id}>
              <div className="card border shadow h-100">
                <div className="card-body">
                  <div className="job-title">
                    <Link
                      to={`/postulaciones/postulacion/${job.id}`}
                      className="text-decoration-none"
                    >
                      {job.job.title}
                    </Link>
                   
                  </div>
                  <p className="job-description">{job.job.description}</p>
                </div>
                <div
                  className="card-footer p-2 border-0 d-flex justify-content-between"
                  style={{ backgroundColor: "#f1f1f1" }}
                >
                  <div>
                    <span>
                      <i className="fas fa-map-marker-alt" />
                      {job.job.location}
                    </span>
                    <span>
                      <i className="fas fa-briefcase" />
                      {job.job.job_type}
                    </span>
                    <span>
                      <i className="fas fa-wallet" />${job.job.salary}
                    </span>
                    <span>
                      <i className="far fa-clock" /> Hace 2 Dias
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobList;
