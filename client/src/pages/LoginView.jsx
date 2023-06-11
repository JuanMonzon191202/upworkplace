import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import loginimg from "../images/login.png";


function App() {


  const [matricula, setMatricula] = useState("");
  const [password, setPassword] = useState("");

  const handleMatriculaChange = (event) => {
    setMatricula(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/Alumnos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        matricula: matricula,
        password: password,
      }),
    });

    if (response.ok) {
      // Login exitoso
      const data = await response.json();
      console.log(data);
    } else {
      // Login fallido
      console.log("Error en login");
    }
  };

  return (
    <div class="container p-3 my-5" fluid>
      <div class="row">
        <div class="col" col="10" md="5">
          <img src={loginimg} class="img-fluid" alt="Sample image" />
        </div>

        <div class="col" col="4" md="5">
          <br />

          <div clas="d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">ingresa a UPW</p>
          </div>
          <br />
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <div class="input-group mb-4">
              <input
                type="text"
                class="form-control"
                placeholder="Matricula"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={matricula}
                onChange={handleMatriculaChange}
              ></input>
            </div>
            <div class="input-group mb-4">
              <input
                type="password"
                class="form-control"
                placeholder="Contraseña"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={password}
                onChange={handlePasswordChange}
              ></input>
            </div>

            <div class="  mt-4 pt-2">
              <button type="submit" class="btn btn-primary mb-0 px-5" size="lg">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
