// import React, { useState } from "react";
import React, { useState, useEffect } from "react";

function Formulario() {
  const [formData, setFormData] = useState({
    nombreEmpresa: "",
    nombreProyecto: "",
    description: "",
    puesto: "",
    nombreConsultante: "",
    telefono: "",
    email: "",
    carrera: "",
  });

  const [carreras, setCarreras] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/EmpresaSolicitud", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        response.json();
        alert("Solicitud enviada");
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/Carrera")
      .then((response) => response.json())
      .then((data) => {
        setCarreras(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nombreEmpresa">Nombre de la empresa</label>
        <input
          type="text"
          className="form-control"
          id="nombreEmpresa"
          name="nombreEmpresa"
          value={formData.nombreEmpresa}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="nombreProyecto">Nombre del proyecto</label>
        <input
          type="text"
          className="form-control"
          id="nombreProyecto"
          name="nombreProyecto"
          value={formData.nombreProyecto}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Descripción</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="puesto">Puesto</label>
        <input
          type="text"
          className="form-control"
          id="puesto"
          name="puesto"
          value={formData.puesto}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="nombreConsultante">Nombre del consultante</label>
        <input
          type="text"
          className="form-control"
          id="nombreConsultante"
          name="nombreConsultante"
          value={formData.nombreConsultante}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="telefono">Teléfono</label>
        <input
          type="text"
          className="form-control"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="carrera">Carrera</label>
        <select
          className="form-control"
          id="carrera"
          name="carrera"
          value={formData.Carrera}
          onChange={handleChange}
        >
          <option value="">Seleccionar carrera</option>
          {carreras.map((carrera) => (
            <option key={carrera.id} value={carrera.id}>
              {carrera.nombre}
            </option>
          ))}
        </select>
      </div>
      <br />
      <button type="submit" className="btn btn-primary btn-lg center">
        Enviar
      </button>
    </form>
  );
}

export default Formulario;
