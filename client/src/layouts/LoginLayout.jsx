import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <Outlet />
    </div>
  );
};
export default LoginLayout;
