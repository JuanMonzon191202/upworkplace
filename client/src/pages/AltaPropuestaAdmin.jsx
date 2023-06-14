import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetallePropuesta = () => {
  const { id } = useParams();
  const [detallePropuesta, setDetallePropuesta] = useState(null);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    const getDetallePropuesta = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/EmpresaSolicitud/${id}`
        );
        const data = await response.json();
        console.log(data);
        setDetallePropuesta(data);
        setActivo(data.activo);
      } catch (error) {
        console.error("Error al obtener el detalle de la propuesta:", error);
      }
    };

    getDetallePropuesta();
  }, [id]);

  const handleCrearEmpresaYPropuesta = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/Empresa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activo: true,
          nombreEmpresa: detallePropuesta.nombreEmpresa,
          nombreResponsable: detallePropuesta.nombreConsultante,
          telefonoResponsable: detallePropuesta.telefono,
          emailResponsable: detallePropuesta.email,
          carrera: detallePropuesta.carrera.id,
        }),
      });

      if (response.ok) {
        // La empresa se creó exitosamente
        // Puedes realizar las acciones necesarias, como actualizar el estado o redirigir a otra página
      } else {
        // Ocurrió un error al crear la empresa
        const data = await response.json();
        console.log("Error al crear la empresa:", data);
      }

      const response2 = await fetch("http://127.0.0.1:8000/api/Propuesta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombrePropuesta: detallePropuesta.nombreProyecto,
          nombreEmpresa: detallePropuesta.nombreEmpresa,
          modalidad: detallePropuesta.modalidad,
          puesto: detallePropuesta.puesto,
          descriptionPropuesta: detallePropuesta.description,
          nombreConsultante: detallePropuesta.nombreConsultante,
          email: detallePropuesta.email,
          telefono: detallePropuesta.telefono,
          carrera: detallePropuesta.carrera.id,
          activo: true,
          alta: true,
        }),
      });

      if (response2.ok) {
        // La propuesta se creó exitosamente
        // Puedes realizar las acciones necesarias, como actualizar el estado o redirigir a otra página
      } else {
        // Ocurrió un error al crear la propuesta
        const data = await response2.json();
        console.log("Error al crear la propuesta:", data);
      }
    } catch (error) {
      console.log("Error al realizar la solicitud:", error);
    }
  };

  if (!detallePropuesta) {
    return <div>Cargando...</div>;
  }

  const toggleActivo = () => {
    setActivo(!activo);
  };
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead></thead>
        <tbody>
          <tr>
            <td>Nombre de la Empresa:</td>
            <td>{detallePropuesta.nombreEmpresa}</td>
          </tr>
          <tr>
            <td>Nombre del Proyecto:</td>
            <td>{detallePropuesta.nombreProyecto}</td>
          </tr>
          <tr>
            <td>Modalidad:</td>
            <td>{detallePropuesta.modalidad}</td>
          </tr>
          <tr>
            <td>Descripción:</td>
            <td>{detallePropuesta.description}</td>
          </tr>
          <tr>
            <td>Carrera:</td>
            <td>{detallePropuesta.carrera.nombre}</td>
          </tr>

          <tr>
            <td>Email:</td>
            <td>{detallePropuesta.email}</td>
          </tr>
          <tr>
            <td>Nombre del Consultante:</td>
            <td>{detallePropuesta.nombreConsultante}</td>
          </tr>
          <tr>
            <td>Puesto:</td>
            <td>{detallePropuesta.puesto}</td>
          </tr>
          <tr>
            <td>Teléfono:</td>
            <td>{detallePropuesta.telefono}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleCrearEmpresaYPropuesta}
        >
          Dar de alta al sistema
        </button>
      </div>
    </div>
  );
};

export default DetallePropuesta;
