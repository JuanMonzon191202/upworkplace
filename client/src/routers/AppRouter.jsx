import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";

import AppLayout from "../layouts/AppLayout";
import LoginLayout from "../layouts/LoginLayout";

import Home from "../pages/Home";

import Login from "../pages/login/Login";
import Jobs from "../pages/jobs/Jobs";
import JobDetail from "../pages/jobs/JobDetail";

// Company
import JobList from "../pages/company/JobList";
import Applications from "../pages/company/Applications";

// Alumn
// import AlumnJobList from "../pages/alumn/JobList";
import PostulacionDetail from "../pages/alumn/ApplicationsAlumn";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* Rutas publicas */}
          <Route path={"/"} element={<Home />} />

          {/* Rutas privadas - Alumno */}
          <Route path="/" element={<PrivateRouter allowedRoles={"ALUMNO"} />}>
            <Route path="/empleos" element={<Jobs />} />
            <Route path="/empleos/:id" element={<JobDetail />} />
            <Route path="/postulaciones" element={<PostulacionDetail />} />
            {/* <Route path="/postulaciones/postulacion/:id" element ={<PostulacionDetail/>}/> */}
            {/* <Route path="/postulacioes" element={<ApplicationsAlumn />} /> */}
          </Route>

          {/* Rutas privadas - Empresa */}
          <Route path="/" element={<PrivateRouter allowedRoles={"EMPRESA"} />}>
            <Route path="/empresa/empleos" element={<JobList />} />
            <Route path="/empresa/empleos/:id" element={<Applications />} />
          </Route>
        </Route>

        {/* Login */}
        <Route path="/" element={<LoginLayout />}>
          <Route path={"/login"} element={<Login />} />

          {/* Not Found Page */}
          <Route path={"*"} element={<>Pagina no encontrada</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
