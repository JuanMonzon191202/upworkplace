import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../app/states/auth";

const PrivateRouter = ({ allowedRoles }) => {
  const location = useLocation();
  const user = useSelector(selectCurrentUser);

  const hasRole = (allowedRoles) => allowedRoles === user?.roles;

  if (!user) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  } else {
    if (allowedRoles && !hasRole(allowedRoles)) {
      return <Navigate to={"/"} state={{ from: location }} replace />;
    }
    return <Outlet />;
  }
};

export default PrivateRouter;
