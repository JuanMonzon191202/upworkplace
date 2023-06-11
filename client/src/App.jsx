import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AdminView from "./pages/AdminView";
import UserView from "./pages/UserView";
import LoginView from "./pages/LoginView";
import Contacus from "./pages/Contacus";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // importar el componente Footer
import DetallePropuesta from "./pages/DetallePropuesta";
import PropuestasViewAdmin from "./pages/propuestasViewAdmin";
import SolicitudesRechazadas from "./pages/PropuestaEmpresaEliminadas";
import DetallePropuestaRechazada from "./pages/DetallePropuestaRechazada";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginView" element={<LoginView />} />
        <Route path="/adminView" element={<AdminView />} />
        <Route path="/userView" element={<UserView />} />
        <Route path="/ContacUs" element={<Contacus />} />
        <Route path="/detalle-propuesta/:id" element={<DetallePropuesta />} />
        <Route
          path="/propuestas-view-admin"
          element={<PropuestasViewAdmin />}
        />
        <Route
          path="/solicitudes-rechazadas"
          element={<SolicitudesRechazadas />}
        />
        <Route
          path="/Detalle-Propuesta-Rechazada/:id"
          element={<DetallePropuestaRechazada />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
