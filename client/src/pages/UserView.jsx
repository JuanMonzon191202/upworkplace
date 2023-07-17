import { useState, useEffect } from "react";
import Propuestas from "../components/PropuestaComp";

const UserView = () => {
  // consumo de la api pai <
  const [propuesta, setPropuesta] = useState([]);

  const getPropuesta = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/Propuesta/{1}");
    const data = await response.json();
    console.log(data);
    setPropuesta(data);
    
  };
  useEffect(() => {
    getPropuesta();
  }, []);

  return (
    <div className="container mt-3">
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 mt-1">
        {propuesta.map((propuesta) => (
          <Propuestas key={propuesta.id} propuesta={propuesta} />
        ))}
      </div>
    </div>
  );
};

export default UserView;
