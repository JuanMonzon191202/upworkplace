import { useParams } from "react-router-dom";
import { baseApi } from "../../services";

const JobDetail = () => {
  const params = useParams();

  const job = baseApi.getJobsById.useQuery(params.id);

  // TODO: realizar diseño de detalle de empleo

  return <div>{JSON.stringify(job.data)}</div>;
};
export default JobDetail;
