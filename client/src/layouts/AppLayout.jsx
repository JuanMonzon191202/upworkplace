import { Outlet } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import AppFooter from "./AppFooter";

const AppLayout = () => {
  return (
    <>
      <AppNavbar />
      <div style={{ minHeight: "74vh" }}>
        <Outlet />
      </div>
      <AppFooter />
    </>
  );
};
export default AppLayout;
